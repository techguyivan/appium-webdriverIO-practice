const EditNoteScreen = require("../../screenobjects/android/edit-note.screen");

describe('Web Browser Access', () => {
    before(async () => {
        await EditNoteScreen.skipTutorial();
        await EditNoteScreen.addAndSaveNote("TV shows", "Friends\nBreakingBad\nPeakyBlinders");
        await driver.back();
    });

    it('Access external link and verify content in the browser', async () => {

    });
});