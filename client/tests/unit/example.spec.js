/* eslint-disable standard/object-curly-even-spacing */
/* eslint-disable no-undef */
import { mount} from '@vue/test-utils'
import Login from '@/components/Login.vue'

describe('Login.vue', () => {
  it('is a vue instance', () => {
    const wrapper = mount(Login)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})

describe('Login.vue', () => {
  it('calls the getLogin method', async () => {
    const wrapper = mount(Login)
    wrapper.setMethods({
      getLogin: jest.fn()
    })
    //  wrapper.find('input[type=text]').setValue('')
    // await wrapper.find('input[type=password]').setValue('123678h')
    await wrapper.find('form').trigger('submit.prevent')
    await expect(wrapper.vm.getLogin).toHaveBeenCalled()
    // await expect(wrapper.find('#error').exists()).toBe(true)
    // await expect(wrapper.html()).toContain('<p>')
    // // wrapper.setData({ Username: 'Hetvi@gmail.com', Password: '12345678h'})
    await wrapper.find('form').trigger('submit.prevent')
    // expect(wrapper.find('.errorPass')).toBeTruthy()
  })
})
/*  await wrapper.find('input[type=text]').setValue('Hetvi@gmail.com')
  await wrapper.find('input[type=password]').setValue('12345678h')
  await wrapper.find('button').trigger('submit.prevent')
  expect(getLogin).toHaveBeenCalled()
}) */

describe('Login.vue', () => {
  it('Should call validate email', () => {
    const wrapper = mount(Login)
    // const text = wrapper.find('p')
    wrapper.setMethods({
      getLogin: jest.fn(),
      validateEmail: jest.fn()
    })
    wrapper.find('input[type=text]').setValue('Hetvigmail.com')
    wrapper.find('input[type=text]').trigger('blur')
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
    wrapper.find('input[type=password]').trigger('blur')
    expect(wrapper.vm.validatePassword).toHaveBeenCalled()
  })
})

describe('Login.vue', () => {
  it('Should return invalid class on wrong password type', async () => {
    const wrapper = mount(Login)
    // const text = wrapper.find('p')
    wrapper.setMethods({
      validatePassword: jest.fn()
    })
    const pass = wrapper.find('input[type=password]')
    await pass.setValue('8h')
    await pass.trigger('blur')
    await expect(wrapper.vm.validatePassword).toHaveBeenCalled()
    await expect(wrapper.find('.errorPass').exists()).toBe(true)
  })
})
describe('Login.vue', () => {
  it('not call the getLogin method', () => {
    const wrapper = mount(Login)
    wrapper.setMethods({
      getLogin: jest.fn()
    })
    wrapper.find('input[type=text]').setValue('Hetvigmailcom')
    wrapper.find('input[type=password]').setValue('1238h')
    wrapper.find('form').trigger('submit.prevent')
    expect(wrapper.vm.getLogin).toHaveBeenCalled()
  })
})

test('Hello', () => {
  // render the component
  const wrapper = mount(Login)

  // should not allow for `username` less than 7 characters, excludes whitespace

  // assert the error is rendered
  expect(wrapper.find('.errorEmail').exists()).toBe(true)

  // update the name to be long enough
  wrapper.setData({ Username: 'Hetvi@gmail.com' })

  // assert the error has gone away
  expect(wrapper.find('.errorEmail').exists()).toBe(false)
})
