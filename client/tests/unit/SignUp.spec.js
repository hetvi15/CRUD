/* eslint-disable standard/object-curly-even-spacing */
/* eslint-disable no-undef */
import { mount} from '@vue/test-utils'
import SignUp from '@/components/SignUp.vue'

describe('SignUp.vue', () => {
  it('Is a vue instance', () => {
    const wrapper = mount(SignUp)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})

describe('SignUp.vue', () => {
  it('The submit button should be disabled on wrong input', async () => {
    const wrapper = mount(SignUp)
    wrapper.setMethods({
      getLogin: jest.fn()
    })
    wrapper.find('#name').setValue('hetvi')
    await wrapper.find('input[type=password]').setValue('8h')
    const button = await wrapper.find('button')
    expect(button.element.disabled).toBe(true)
  })
})
describe('SignUp.vue', () => {
  it('The submit button should be active on right credentials', async () => {
    const wrapper = mount(SignUp)
    wrapper.setMethods({
      getLogin: jest.fn()
    })
    await wrapper.find('#name').setValue('hetvi')
    await wrapper.find('#username').setValue('hetvi@gmail.com')
    await wrapper.find('#password').setValue('12345678h')
    await wrapper.find('#confirm').setValue('12345678h')
    await wrapper.find('#date').setValue('15/12/2000')
    await wrapper.find('#country').setValue('India')
    await wrapper.find('#age').setValue('21')
    const button = await wrapper.find('button')
    expect(button.element.disabled).toBe(false)
  })
})
describe('SignUp.vue', () => {
  it('Should call validate name ', () => {
    const wrapper = mount(SignUp)
    // const text = wrapper.find('p')
    wrapper.setMethods({
      validateName: jest.fn()
    })
    wrapper.find('#name').setValue('Hetvi')
    wrapper.find('#username').trigger('input')
    expect(wrapper.vm.validateName).toHaveBeenCalled()
  })
})
describe('SignUp.vue', () => {
  it('Should call validate email', () => {
    const wrapper = mount(SignUp)
    // const text = wrapper.find('p')
    wrapper.setMethods({
      validateEmail: jest.fn()
    })
    wrapper.find('#username').setValue('Hetvigmail.com')
    wrapper.find('#username').trigger('input')
    expect(wrapper.vm.validateEmail).toHaveBeenCalled()
  })
})

describe('SignUp.vue', () => {
  it('Should call validate Password', () => {
    const wrapper = mount(SignUp)
    // const text = wrapper.find('p')
    wrapper.setMethods({
      validatePassword: jest.fn()
    })
    wrapper.find('input[type=password]').setValue('12345678h')
    wrapper.find('input[type=password]').trigger('input')
    expect(wrapper.vm.validatePassword).toHaveBeenCalled()
  })
})
describe('SignUp.vue', () => {
  it('Should call validate Birthdate', () => {
    const wrapper = mount(SignUp)
    // const text = wrapper.find('p')
    wrapper.setMethods({
      validateBirthdate: jest.fn()
    })
    wrapper.find('#date').setValue('2000/15/12')
    wrapper.find('#date').trigger('input')
    expect(wrapper.vm.validateBirthdate).toHaveBeenCalled()
  })
})

describe('SignUp.vue', () => {
  it('Should Call postData() method', async () => {
    const wrapper = mount(SignUp)
    wrapper.setMethods({
      postData: jest.fn()
    })
    await wrapper.find('#name').setValue('hetvi')
    await wrapper.find('#username').setValue('hetvi@gmail.com')
    await wrapper.find('#password').setValue('12345678h')
    await wrapper.find('#confirm').setValue('12345678h')
    await wrapper.find('#date').setValue('15/12/2000')
    await wrapper.find('#country').setValue('India')
    await wrapper.find('#age').setValue('21')
    wrapper.find('form').trigger('submit.prevent')
    expect(wrapper.vm.postData).toHaveBeenCalled()
  })
})
