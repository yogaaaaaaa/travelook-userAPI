const request = require("supertest"); //importing supertest
const app = require("../index"); //import server
const { User } = require("../models");

let authenticationToken;

const deleteAllData = async () => {
//   await User.destroy();
 await User.destroy({
      where: {},
        force: true,
      });
};

deleteAllData();


describe("Auth Test", () => {
  describe("/auth/signup POST", () => {
    // it("it should make user and get the token", async () => {
    //   const res = await request(app)
    it("it should make user and get the token", async () => {
      const res = await request(app).post("/auth/signup").send({
        email: "usertest@test.com",
        password: "Aneh1234!!",
        confirmPassword: "Aneh1234!!",
        nama: "test",
      });


      // .post("/user/signup")
      // .field("email", "usertest@test.com")
      // .field("password", "Aneh1234!!")
      // .field("confirmPassword", "Aneh1234!!")
      // // .field("image", "000b2db9c9274e2168f1a22d3803fdd7.png");
      // console.log(res.body)
      
      
      // email: ,
      // password: "Aneh1234!!",
      // confirmPassword: "Aneh1234!!",
      // nama: "User Test",
      // image: "",

      // .attach('image', '000b2db9c9274e2168f1a22d3803fdd7.png')
      expect(res.statusCode).toEqual(200);
      expect(res.body).toBeInstanceOf(Object);
      expect(res.body.message).toEqual("sukses");
      expect(res.body).toHaveProperty("token");
      authenticationToken = res;
    });
  });
});
// });

//test the error
describe("/auth/signup POST", () => {
  it("It should error while making user", async () => {
    const res = await request(app).post("/auth/signup").send({
      email: "usertest@test.com",
      password: "Aneh1234!!",
      confirmPassword: "Aneh1234!!",
      name: "User Test",
    });
    console.log(res.body)

    expect(res.statusCode).toEqual(401);
    expect(res.body).toBeInstanceOf(Object);
    expect(res.body.message).toEqual("Can't Create User");
  });
});

describe("/POST Sign In", () => {
  it("It should make user login and get authentication_key (jwt)", async () => {
    const res = await request(app).post("/auth/signin").send({
      email: "usertest@test.com",
      password: "Aneh1234!!",
    });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Object);
    expect(res.body.message).toEqual("sukses");
    expect(res.body).toHaveProperty("token");

    authenticationToken = res.body.token;
    console.log(authenticationToken);
  });
});
