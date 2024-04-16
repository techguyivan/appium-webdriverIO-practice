describe('Add Notes', () => {
    it('Skip tutorial', async () => {
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]')
            .click();

        await expect($('//*[@text="Add note"]')).toBeDisplayed();
    });

    it('Add a note, save changes and verify note', async () => {
        await $('//*[@text="Add note"]').click();
        await $('//*[@text="Text"]').click();
        await expect($('//*[@text="Editing"]')).toBeDisplayed();

        // Add note title
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]')
            .addValue("Fav Anime List");

        // Add note body
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]')
            .addValue("Naruto\nOnePiece\nAOT");

        // Save the changes
        await driver.back();
        await driver.back();

        //Assertions
        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]'))
            .toBeDisplayed();

        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]'))
            .toHaveText("Naruto\nOnePiece\nAOT");
    });

    // Exercise - Delete Note

    it.only('Delete a note', async () => {

        //Skip tutorial
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]').click();

        //Create a new note
        await $('//*[@text="Add note"]').click();
        await $('//*[@text="Text"]').click();

        // Add note title
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]')
            .addValue("DESTROY THIS NOTE");

        // Add note body
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]')
            .addValue("DESTRUCTION");

        // Save the changes
        await driver.back();
        await driver.back();

        //Select back arrow
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/back_btn"]').click();

        //Select note
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]').click();

        //Select 3 ellipsis icon
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/menu_btn"]').click();

        //Select Delete
        await $('//*[@text="Delete"]').click();

        //Select "Ok"
        await $('//*[@resource-id="android:id/button1"]').click();

        //Assert note has been removed on note list screen
        await expect($('//*[@text="Add note"]')).toBeDisplayed();

        //Select hamburger icon
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]').click();

        //Select "Trash Can"
        await $('//*[@text="Trash Can"]').click();

        //Assert note is in "Trash Can"
        await expect($('//*[@text="DESTROY THIS NOTE"]')).toBeDisplayed();

    });
});