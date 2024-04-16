describe('Android Elements Tests', () => {
    it('Find element by accessibility id', async () => {
        //find element by accessibility id
        const appOption = await $('~App');

        //click on element
        await appOption.click();

        //assertion
        const actionBar = await $('~Action Bar')
        await expect(actionBar).toBeExisting();
    })

    it('Find element by class name', async () => {
        //find element by class name
        const className = await $('android.widget.TextView');

        console.log(await className.getText());

        //Assertion
        await expect(className).toHaveText('API Demos');
    });

    xit('Find elements by xpath', async () => {
        // xpath - (//tagname[@attribute=value])
        await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click();

        // find by resourceId
        await $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]').click();

        //find element by text
        await $('//android.widget.TextView[@text="Command two"]').click();

        //find by class
        const textAssertion = await $('//android.widget.TextView');
        await expect(textAssertion).toHaveText("You selected: 1 , Command two");
    });

    it('Find elements by UIAutomator', async () => {
        //find by text contains
        await $('android=new UiSelector().textContains("Alert")').click();
    });

    it('Find multiple elements', async () => {
        const expectedList = [
            'API Demos', "Access'ibility",
            'Accessibility', 'Animation',
            'App', 'Content',
            'Graphics', 'Media',
            'NFC', 'OS',
            'Preference', 'Text',
            'Views'
        ]
        const actualList = []

        //find multiple elements
        const textList = await $$('android.widget.TextView');

        //loop through them
        for (const element of textList) {
            actualList.push(await element.getText());

        }

        //assert the list
        await expect(actualList).toEqual(expectedList);

    });

    it('Exercise 1 - Input text field', async () => {
        //Find and click on 'Views' by accessibility ID
        const views = await $('~Views');

        await views.click();

        //Find and click on 'Auto Complete' by accessibility ID
        const autoComplete = await $('~Auto Complete');

        console.log(await autoComplete.getText());

        //Assertion - Auto Complete Text is visible
        await expect(autoComplete).toHaveText('Auto Complete');

        await autoComplete.click();

        //Find and click on 'Screen Top' by xpath -(//tagname[@attribute=value])
        await $('//android.widget.TextView[@content-desc="1. Screen Top"]').click();

        //Input country into text field
        const countryInput = await $('android.widget.AutoCompleteTextView');
        await countryInput.addValue('United States');

        //Assertion - 'United States is in the text field'
        await expect(countryInput).toHaveText("United States");

    });
});