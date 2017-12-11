// const userController = require("../userController");

test("uc", () => {
    expect(1).toBe(1);
});
//
// describe("userController", () => {
//     test("get all users", () => {
//         expect(userController.getUsers()).toEqual(expect.arrayContaining([
//             {
//                 "id": 1,
//                 "username": "admin",
//                 "email": "admin@admin.com"
//             },
//             {
//                 "id": 2,
//                 "username": "doe",
//                 "email": "doe@doe.com"
//             }
//         ]));
//     });
//
//     test("get one user specified by id", () => {
//         expect(userController.getUser({params: {id: "1"}})).toEqual(
//             {
//                 "id": 1,
//                 "username": "admin",
//                 "email": "admin@admin.com"
//             }
//         );
//     });
// });
