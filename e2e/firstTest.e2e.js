describe("Home Screen", () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it("should have welcome screen", async () => {
    await expect(element(by.id("welcome"))).toBeVisible();
  });

  it("check register a new skill", async () => {
    const inputNewSkill = await element(by.id("new-skill-input"));
    const buttonNewSkill = await element(by.id("new-skill-button"));

    await inputNewSkill.tap();
    await inputNewSkill.typeText("React Native\n");
    await buttonNewSkill.tap();

    await expect(element(by.id("flat-list-skills"))).toBeVisible();

    await expect(element(by.id("React Native"))).toBeVisible();
  });
});
