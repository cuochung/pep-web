import { ref, computed } from 'vue'

/**
 * 表單驗證 Composable
 */
export function useFormValidation() {
  const errors = ref({})
  const touched = ref({})

  /**
   * 驗證規則
   */
  const rules = {
    required: (value) => {
      return !!value || '此欄位為必填'
    },
    email: (value) => {
      const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return pattern.test(value) || '請輸入有效的電子郵件地址'
    },
    phone: (value) => {
      const pattern = /^[\d\-\(\)\s]+$/
      return pattern.test(value) || '請輸入有效的電話號碼'
    },
    minLength: (min) => (value) => {
      return (value && value.length >= min) || `至少需要 ${min} 個字元`
    },
    maxLength: (max) => (value) => {
      return (value && value.length <= max) || `最多 ${max} 個字元`
    }
  }

  /**
   * 驗證單一欄位
   */
  const validateField = (fieldName, value, validations) => {
    if (!validations || validations.length === 0) {
      return true
    }

    for (const validation of validations) {
      const result = validation(value)
      if (result !== true) {
        errors.value[fieldName] = result
        return false
      }
    }

    delete errors.value[fieldName]
    return true
  }

  /**
   * 驗證整個表單
   */
  const validateForm = (formData, validationRules) => {
    errors.value = {}
    let isValid = true

    Object.keys(validationRules).forEach(fieldName => {
      const value = formData[fieldName]
      const validations = validationRules[fieldName]
      
      if (!validateField(fieldName, value, validations)) {
        isValid = false
      }
    })

    return isValid
  }

  /**
   * 標記欄位為已觸碰
   */
  const touchField = (fieldName) => {
    touched.value[fieldName] = true
  }

  /**
   * 重置表單驗證
   */
  const resetValidation = () => {
    errors.value = {}
    touched.value = {}
  }

  /**
   * 檢查欄位是否有錯誤
   */
  const hasError = (fieldName) => {
    return touched.value[fieldName] && !!errors.value[fieldName]
  }

  /**
   * 取得欄位錯誤訊息
   */
  const getError = (fieldName) => {
    return errors.value[fieldName] || ''
  }

  /**
   * 表單是否有任何錯誤
   */
  const hasAnyError = computed(() => {
    return Object.keys(errors.value).length > 0
  })

  return {
    errors,
    touched,
    rules,
    validateField,
    validateForm,
    touchField,
    resetValidation,
    hasError,
    getError,
    hasAnyError
  }
}

/**
 * 聯絡表單專用
 */
export function useContactForm() {
  const formData = ref({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })

  const isSubmitting = ref(false)
  const submitSuccess = ref(false)
  const submitError = ref('')

  const { 
    rules, 
    validateForm, 
    touchField, 
    hasError, 
    getError, 
    resetValidation 
  } = useFormValidation()

  const validationRules = {
    name: [rules.required, rules.minLength(2)],
    email: [rules.required, rules.email],
    phone: [rules.required, rules.phone],
    message: [rules.required, rules.minLength(10)]
  }

  const handleSubmit = async () => {
    // 標記所有欄位為已觸碰
    Object.keys(formData.value).forEach(field => {
      touchField(field)
    })

    // 驗證表單
    if (!validateForm(formData.value, validationRules)) {
      return false
    }

    isSubmitting.value = true
    submitError.value = ''

    try {
      // 這裡可以加入實際的 API 呼叫
      // await api.submitContactForm(formData.value)
      
      // 模擬 API 呼叫
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      submitSuccess.value = true
      
      // 重置表單
      setTimeout(() => {
        formData.value = {
          name: '',
          email: '',
          phone: '',
          company: '',
          message: ''
        }
        resetValidation()
        submitSuccess.value = false
      }, 3000)

      return true
    } catch (error) {
      submitError.value = '提交失敗，請稍後再試'
      return false
    } finally {
      isSubmitting.value = false
    }
  }

  return {
    formData,
    isSubmitting,
    submitSuccess,
    submitError,
    handleSubmit,
    touchField,
    hasError,
    getError
  }
}

