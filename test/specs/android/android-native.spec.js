describe('Android Native Feature Tests', () => {
    it('Access an Activity directly', async () => {
        //access an activity
        await driver.startActivity('io.appium.android.apis', 'io.appium.android.apis.app.AlertDialogSamples');

        //pause 3 seconds
        await driver.pause(3000);

        //assertion
        await expect($('//*[@text="App/Alert Dialogs"]')).toExist();
    })

    it('Working with Dialog Boxes', async () => {

        //access an activity
        await driver.startActivity('io.appium.android.apis', 'io.appium.android.apis.app.AlertDialogSamples');

        //click on first dialog box
        await $('//*[@resource-id="io.appium.android.apis:id/two_buttons"]')
            .click();

        // accept Alert
        //await driver.acceptAlert();

        // dismiss Alert
        // await driver.dismissAlert();

        // get alert text
        console.log('ALERT TEXT -->', await driver.getAlertText());

        // click on the OK button
        await $('//*[@resource-id="android:id/button1"]').click();

        //assertion - alert box is no longer visible
        await expect($('//*[resource-id="android:id/alertTitle"]')).not.toExist();

    });

    it('Vertical scrolling', async () => {
        await $('~App').click();
        await $('~Activity').click();

        //scroll to the end (not stable if element gets moved)
        //await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');

        //scrollTextIntoView - more stable
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")').click();

        //await $('~Secure Surfaces').click();

        //assertion
        await expect($('~Secure Dialog')).toExist();


    });

    it("Horizontal Scrolling", async () => {
        await driver.startActivity(
            "io.appium.android.apis",
            "io.appium.android.apis.view.Gallery1"
        );

        //Horizontal scrolling
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()');

        await driver.pause(3000);

    });

    it.only("Scrolling Exercise - Selecting the date widget - Android", async () => {

        //Access the date picker
        await driver.startActivity(
            "io.appium.android.apis",
            "io.appium.android.apis.view.DateWidgets1"
        )

        //Get the current date
        const date = await $('/hierarchy/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.TextView');
        const currentDate = await date.getText();

        //Select "change the date"
        await $('~change the date').click();

        //Scroll horizontally to the right
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
        await driver.pause(3000);

        //Select the 10th date from the month
        await $('//android.view.View[@text="10"]').click();

        //Select the "Ok" button
        await $('//android.widget.Button[@resource-id="android:id/button1"]').click();

        //Assert the date is updated on the dialog screen
        await expect(await date.getText()).not.toEqual(currentDate);
    })
});