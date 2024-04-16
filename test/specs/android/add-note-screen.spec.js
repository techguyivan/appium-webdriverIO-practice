const AddNoteScreen = require("../../screenobjects/android/add-note.screen");

describe('Add Notes', () => {
    it('Skip tutorial', async () => {
        await AddNoteScreen.skipBtn.click();

        await expect(AddNoteScreen.addNoteTxt).toBeDisplayed();
    });

    it('Add a note, save changes and verify note', async () => {
        await AddNoteScreen.addNoteTxt.click();
        await AddNoteScreen.textOption.click();
        await expect(AddNoteScreen.textEditing).toBeDisplayed();

        // Add note title
        await AddNoteScreen.noteHeading.addValue("Fav Anime List");

        // Add note body
        await AddNoteScreen.noteBody.addValue("Naruto\nOnePiece\nAOT");

        // Save the changes
        await AddNoteScreen.saveNote();

        //Assertions
        await expect(AddNoteScreen.editBtn).toBeDisplayed();
        await expect(AddNoteScreen.viewNote).toHaveText("Naruto\nOnePiece\nAOT");
    });
});