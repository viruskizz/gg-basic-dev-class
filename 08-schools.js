

function createRoom(studentSize) {
  let students = [];
  for(let i = 0; i < studentSize; i++) {
    students.push({
      firstname: 'Art',
      age: Math.round(Math.random() * 100),
    });
  }
  return students;
}

function createSchool(roomSize, studentSize) {
  let rooms = [];
  for(let j = 0; j < roomSize; j++) {
    let room = createRoom(studentSize);
    rooms.push(room);
  }
  return rooms;
}

module.exports = {
  createRoom,
  createSchool,
}