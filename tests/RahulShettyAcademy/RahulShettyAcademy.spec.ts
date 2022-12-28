import test, { expect } from "@playwright/test";

test("logInAndProductTitle", async ({ page }) => {

    const userName = page.locator(`#userEmail`)
    const userPassword = page.locator(`#userPassword`)
    const signInBtn = page.locator(`#login`)

    await page.goto("https://rahulshettyacademy.com/client/")
    await userName.fill(`adrianmajzel@gmail.com`)
    await userPassword.fill(`Adrian0001`)
    await signInBtn.click()
    
    console.log( await page.locator(`.card-body b`).first().textContent())
    await expect(page.locator(`.card-body b`).first()).toContainText(`zara coat 3`)

})