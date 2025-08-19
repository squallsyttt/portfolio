# 个人信息配置说明 / Personal Information Configuration Guide

## 📄 概述 / Overview

为了方便统一管理项目中散布的个人信息，我们创建了 `src/config/personal.ts` 作为统一配置文件。所有个人信息现在都集中在这个文件中管理，包括：

To easily manage personal information scattered throughout the project, we've created `src/config/personal.ts` as a unified configuration file. All personal information is now centrally managed in this file, including:

## 🏗️ 配置文件结构 / Configuration File Structure

### `src/config/personal.ts`

```typescript
// 基本个人信息 / Personal Basic Information
export const PERSONAL_INFO = {
  firstName: "姓名",
  lastName: "姓氏", 
  displayName: "显示名称",
  username: "用户名",
  // ... 其他基本信息
};

// 职业信息 / Professional Information  
export const PROFESSIONAL_INFO = {
  jobTitle: "职位标题",
  jobs: [/* 工作经历 */],
};

// 网站和域名信息 / Website and Domain Information
export const WEBSITE_INFO = {
  primaryDomain: "主域名",
  otherWebsites: [/* 其他网站 */],
  // ... 资源链接
};

// 社交媒体信息 / Social Media Information
export const SOCIAL_MEDIA = {
  github: { username: "用户名", profile: "链接" },
  twitter: { username: "用户名", profile: "链接" },
};

// 项目仓库信息 / Project Repository Information  
export const REPOSITORY_INFO = {
  currentProject: {/* 当前项目信息 */},
  author: {/* 作者信息 */},
};
```

## 📁 文件更新情况 / Updated Files

### ✅ 已更新的文件 / Updated Files:

1. **`src/data/user.ts`** - 现在从统一配置导入
2. **`src/config/site.ts`** - 使用配置化的信息
3. **`src/components/site-footer.tsx`** - 使用配置化的社交链接
4. **`src/registry/flip-sentences/flip-sentences.tsx`** - 修复类型兼容性

### 📝 添加了注释的文件 / Files with Added Comments:

1. **`package.json`** - 添加了配置文件引用注释
2. **`.github/FUNDING.yml`** - 添加了配置文件引用注释

## 🔧 如何修改个人信息 / How to Modify Personal Information

### 1. 修改基本信息 / Modify Basic Information
```typescript
// 在 src/config/personal.ts 中修改
export const PERSONAL_INFO = {
  firstName: "你的名字", // 修改这里
  lastName: "你的姓氏",  // 修改这里
  // ...
};
```

### 2. 添加新的社交媒体 / Add New Social Media
```typescript
export const SOCIAL_MEDIA = {
  github: { username: "username", profile: "https://github.com/username" },
  twitter: { username: "username", profile: "https://x.com/username" },
  // 添加新的社交媒体
  linkedin: { username: "username", profile: "https://linkedin.com/in/username" },
};
```

### 3. 更新项目信息 / Update Project Information
```typescript
export const REPOSITORY_INFO = {
  currentProject: {
    name: "你的项目名",
    description: "项目描述",
    githubRepo: "用户名/仓库名",
    githubUrl: "https://github.com/用户名/仓库名",
    homepage: "https://你的网站.com",
  },
};
```

## 🎯 使用示例 / Usage Examples

### 在组件中使用 / Using in Components
```typescript
import { PERSONAL_INFO, SOCIAL_MEDIA } from "@/config/personal";

export function MyComponent() {
  return (
    <div>
      <h1>Hello, {PERSONAL_INFO.displayName}!</h1>
      <a href={SOCIAL_MEDIA.github.profile}>GitHub</a>
    </div>
  );
}
```

### 在配置文件中使用 / Using in Config Files
```typescript
import { USER, REPOSITORY_INFO } from "@/config/personal";

export const SITE_CONFIG = {
  title: USER.displayName,
  githubUrl: REPOSITORY_INFO.currentProject.githubUrl,
};
```

## ⚠️ 注意事项 / Important Notes

1. **类型安全** / Type Safety: 配置对象使用 `as const` 确保类型安全
2. **向后兼容** / Backward Compatibility: 保留了原有的 `USER` 导出对象  
3. **JSON 文件** / JSON Files: `package.json` 等 JSON 文件需要手动更新
4. **编码信息** / Encoded Information: email 和 phoneNumber 使用 base64 编码存储

## 🔄 迁移清单 / Migration Checklist

- ✅ 创建统一配置文件 `src/config/personal.ts`
- ✅ 更新 `src/data/user.ts` 导入配置
- ✅ 更新 `src/config/site.ts` 使用配置
- ✅ 更新组件使用配置化的社交链接
- ✅ 修复类型兼容性问题
- ✅ 添加配置文件引用注释
- ✅ 运行类型检查确保无错误

## 🎉 好处 / Benefits

1. **集中管理** / Centralized Management: 所有个人信息在一个文件中
2. **类型安全** / Type Safety: TypeScript 类型检查
3. **易于维护** / Easy Maintenance: 修改一处，全项目生效
4. **清晰注释** / Clear Comments: 中英文双语注释
5. **模块化设计** / Modular Design: 按功能分组的配置结构