<template>
  <nav class="navigation">
    <ul class="nav-list">
      <li 
        v-for="item in NAVIGATION" 
        :key="item.path"
        class="nav-item"
        :class="{ 'has-dropdown': item.children.length > 0 }"
      >
        <router-link 
          :to="item.path" 
          class="nav-link"
          :class="{ 'active': isActive(item.path) }"
        >
          {{ item.name }}
        </router-link>

        <!-- 下拉選單 -->
        <ul v-if="item.children.length > 0" class="dropdown">
          <li v-for="child in item.children" :key="child.path">
            <router-link :to="child.path" class="dropdown-link">
              {{ child.name }}
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { NAVIGATION } from '../../utils/constants'

const route = useRoute()

const isActive = (path) => {
  if (path === '/') {
    return route.path === '/'
  }
  return route.path.startsWith(path)
}
</script>

<style scoped>
.navigation {
  flex: 1;
}

.nav-list {
  display: flex;
  align-items: center;
  gap: var(--spacing-lg);
  list-style: none;
}

.nav-item {
  position: relative;
}

.nav-link {
  display: block;
  padding: var(--spacing-sm) var(--spacing-md);
  color: var(--color-text-primary);
  font-weight: var(--font-weight-medium);
  transition: all var(--transition-fast);
  border-radius: var(--radius-md);
}

.nav-link:hover,
.nav-link.active {
  color: var(--color-primary);
  background-color: rgba(74, 124, 89, 0.1);
}

/* 下拉選單 */
.has-dropdown:hover .dropdown {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 200px;
  background-color: var(--color-white);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-lg);
  padding: var(--spacing-sm);
  list-style: none;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all var(--transition-base);
  z-index: var(--z-dropdown);
}

.dropdown-link {
  display: block;
  padding: var(--spacing-sm) var(--spacing-md);
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
  border-radius: var(--radius-sm);
  transition: all var(--transition-fast);
}

.dropdown-link:hover {
  color: var(--color-primary);
  background-color: var(--color-gray-50);
}
</style>

