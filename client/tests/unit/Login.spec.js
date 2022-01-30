/* eslint-disable standard/object-curly-even-spacing */
/* eslint-disable no-undef */
import { mount} from '@vue/test-utils'
import Login from '@/components/Login.vue'

describe('Login.vue', () => {
  it('Is a vue instance', () => {
    const wrapper = mount(Login)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})

describe('Login.vue', () => {
  it('The submit button should be disabled on wrong input', async () => {
    const wrapper = mount(Login)
    wrapper.setMethods({
      getLogin: jest.fn()
    })
    wrapper.find('input[type=text]').setValue('hetvi')
    await wrapper.find('input[type=password]').setValue('8h')
    const button = await wrapper.find('button')
    expect(button.element.disabled).toBe(true)
  })
})
describe('Login.vue', () => {
  it('The submit button should be active on right credentials', async () => {
    const wrapper = mount(Login)
    wrapper.setMethods({
      getLogin: jest.fn()
    })
    wrapper.find('input[type=text]').setValue('he@gmail.com')
    await wrapper.find('input[type=password]').setValue('12345678h')
    const button = await wrapper.find('button')
    expect(button.element.disabled).toBe(false)
  })
})

describe('Login.vue', () => {
  it('Should call validate email', () => {
    const wrapper = mount(Login)
    // const text = wrapper.find('p')
    wrapper.setMethods({
      getLogin: jest.fn(),
      validateEmail: jest.fn()
    })
    wrapper.find('input[type=text]').setValue('Hetvigmail.com')
    wrapper.find('input[type=text]').trigger('input')
    expect(wrapper.vm.validateEmail).toHaveBeenCalled()
  })
})

describe('Login.vue', () => {
  it('Should call validate Password', () => {
    const wrapper = mount(Login)
    // const text = wrapper.find('p')
    wrapper.setMethods({
      validatePassword: jest.fn()
    })
    wrapper.find('input[type=password]').setValue('12345678h')
    wrapper.find('input[type=password]').trigger('input')
    expect(wrapper.vm.validatePassword).toHaveBeenCalled()
  })
})
describe('Login.vue', () => {
  it('Should Call getLogin method', async () => {
    const wrapper = mount(Login)
    wrapper.setMethods({
      getLogin: jest.fn()
    })
    wrapper.find('input[type=text]').setValue('Hetvi@gmail.com')
    wrapper.find('input[type=password]').setValue('12345678h')
    wrapper.find('form').trigger('submit.prevent')
    expect(wrapper.vm.getLogin).toHaveBeenCalled()
  })
})
