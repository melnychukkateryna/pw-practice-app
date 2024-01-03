import {test} from '../test-options'
import {faker} from '@faker-js/faker'

/*test.beforeEach(async({page}) => {
    await page.goto('http://localhost:4200/')
})*/

test('parametrized methods', async({pageManager}) => {
    //const pm = new PageManager(page)
    const randomFullName = faker.person.fullName()
    const randomEmail = `${randomFullName.replace(' ', '')}${faker.number.int(1000)}@test.com`

    //await pm.navigateTo().formLayoutsPage()
    await pageManager.onFormLayoutsPage().submitUsingTheGridFormWithCredentialsAndSelectOption('test@test.com', 'Welcome1', 'Option 1')
    await pageManager.onFormLayoutsPage().submitInlineFormWithNameEmailAndCheckbox(randomFullName, randomEmail, true)

})
