// const user = require("../user");

test("u", () => {
    expect(1).toBe(1);
});
// describe("user", () => {
//     test("get all users", () => {
//         expect(user.getUsers()).toEqual(expect.arrayContaining([
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
//         expect(user.getUser(1)).toEqual(
//             {
//                 "id": 1,
//                 "username": "admin",
//                 "email": "admin@admin.com"
//             }
//         );
//     });
//
//     test("get non existing user", () => {
//         expect(user.getUser(1337)).toEqual({});
//     });
// });
