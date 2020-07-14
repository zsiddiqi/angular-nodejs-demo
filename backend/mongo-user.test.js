const {MongoClient} = require('mongodb');

describe('insert', () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    db = await connection.db();
  });

  afterAll(async () => {
    await connection.close();
  });

  it('should be able to create user', async () => {
    const users = db.collection('users');

    const mockUser = {_id: '6ffdefeb7515a8f9f4032d61', "user_name":"Alice","user_email":"alice@test.io","section":"C","subjects":[{"name":"Maths"},{"name":"English"}],"dob":"1991-02-06","gender":"Female"};
    await users.insertOne(mockUser);

    const insertedUser = await users.findOne({_id: '6ffdefeb7515a8f9f4032d61'});

    expect(insertedUser).toEqual(mockUser);
  });

});
