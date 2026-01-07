<template>
  <form class="contact-form" @submit.prevent="handleSubmit">
    <!-- 姓名 -->
    <div class="form-group">
      <label for="name" class="form-label">
        姓名 <span class="required">*</span>
      </label>
      <input
        id="name"
        v-model="formData.name"
        type="text"
        class="form-input"
        :class="{ 'error': hasError('name') }"
        placeholder="請輸入您的姓名"
        @blur="touchField('name')"
      />
      <span v-if="hasError('name')" class="error-message">
        {{ getError('name') }}
      </span>
    </div>

    <!-- 電子郵件 -->
    <div class="form-group">
      <label for="email" class="form-label">
        電子郵件 <span class="required">*</span>
      </label>
      <input
        id="email"
        v-model="formData.email"
        type="email"
        class="form-input"
        :class="{ 'error': hasError('email') }"
        placeholder="example@email.com"
        @blur="touchField('email')"
      />
      <span v-if="hasError('email')" class="error-message">
        {{ getError('email') }}
      </span>
    </div>

    <!-- 電話 -->
    <div class="form-group">
      <label for="phone" class="form-label">
        聯絡電話 <span class="required">*</span>
      </label>
      <input
        id="phone"
        v-model="formData.phone"
        type="tel"
        class="form-input"
        :class="{ 'error': hasError('phone') }"
        placeholder="請輸入您的聯絡電話"
        @blur="touchField('phone')"
      />
      <span v-if="hasError('phone')" class="error-message">
        {{ getError('phone') }}
      </span>
    </div>

    <!-- 公司名稱 -->
    <div class="form-group">
      <label for="company" class="form-label">
        公司名稱
      </label>
      <input
        id="company"
        v-model="formData.company"
        type="text"
        class="form-input"
        placeholder="請輸入公司名稱（選填）"
      />
    </div>

    <!-- 訊息內容 -->
    <div class="form-group">
      <label for="message" class="form-label">
        訊息內容 <span class="required">*</span>
      </label>
      <textarea
        id="message"
        v-model="formData.message"
        class="form-textarea"
        :class="{ 'error': hasError('message') }"
        placeholder="請輸入您的訊息內容"
        rows="5"
        @blur="touchField('message')"
      ></textarea>
      <span v-if="hasError('message')" class="error-message">
        {{ getError('message') }}
      </span>
    </div>

    <!-- 提交按鈕 -->
    <button 
      type="submit" 
      class="submit-btn"
      :disabled="isSubmitting"
    >
      <span v-if="!isSubmitting">送出訊息</span>
      <span v-else class="spinner"></span>
    </button>

    <!-- 成功訊息 -->
    <transition name="fade">
      <div v-if="submitSuccess" class="success-message">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          stroke-width="2" 
          stroke-linecap="round" 
          stroke-linejoin="round"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        訊息已成功送出！我們會盡快與您聯繫。
      </div>
    </transition>

    <!-- 錯誤訊息 -->
    <transition name="fade">
      <div v-if="submitError" class="error-alert">
        {{ submitError }}
      </div>
    </transition>
  </form>
</template>

<script setup>
import { useContactForm } from '../../composables/useFormValidation'

const {
  formData,
  isSubmitting,
  submitSuccess,
  submitError,
  handleSubmit,
  touchField,
  hasError,
  getError
} = useContactForm()
</script>

<style scoped>
.contact-form {
  max-width: 600px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: var(--spacing-xl);
}

.form-label {
  display: block;
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-sm);
}

.required {
  color: var(--color-error);
}

.form-input,
.form-textarea {
  width: 100%;
  padding: var(--spacing-md);
  border: 2px solid var(--color-gray-300);
  border-radius: var(--radius-md);
  font-size: var(--font-size-base);
  font-family: inherit;
  transition: all var(--transition-base);
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(74, 124, 89, 0.1);
}

.form-input.error,
.form-textarea.error {
  border-color: var(--color-error);
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
}

.error-message {
  display: block;
  color: var(--color-error);
  font-size: var(--font-size-sm);
  margin-top: var(--spacing-xs);
}

.submit-btn {
  width: 100%;
  padding: var(--spacing-md) var(--spacing-xl);
  background-color: var(--color-primary);
  color: var(--color-white);
  border: none;
  border-radius: var(--radius-lg);
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  cursor: pointer;
  transition: all var(--transition-base);
}

.submit-btn:hover:not(:disabled) {
  background-color: var(--color-primary-dark);
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.success-message {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-lg);
  background-color: var(--color-success);
  color: var(--color-white);
  border-radius: var(--radius-lg);
  margin-top: var(--spacing-lg);
  animation: fadeInUp 0.3s ease-out;
}

.error-alert {
  padding: var(--spacing-lg);
  background-color: var(--color-error);
  color: var(--color-white);
  border-radius: var(--radius-lg);
  margin-top: var(--spacing-lg);
  animation: shake 0.5s ease-out;
}
</style>

