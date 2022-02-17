import Vue from 'vue'
import VeeValidate from 'vee-validate'  // 表单验证
import zh_CN from 'vee-validate/dist/locale/zh_CN'

Vue.use(VeeValidate)

VeeValidate.Validator.localize('zh_CN', {
  messages: {
    ...zh_CN.messages,
    is: field => `${field}必须与登录密码相同`  // 修改内置规则的 messages，让确认密码与密码相同
  },
  attributes: {  // 给校验的 field 属性映射中文名称
    phone: '手机号',
    code: '验证码',
    password: '登录密码',
    password1: '确认密码',
    agree: '协议'
  }
})

// 自定义校验规则
VeeValidate.Validator.extend('agree', {
  validate: value => value,
  getMessage: field => field + '必须同意'
})
