import { loadingSliceDef } from "./loadingSlice.js";

function testLoadingSlice() {
  const fakeState = { value: { completed: true } };
  loadingSliceDef.reducers.loadingCompleted(fakeState);
  if (!fakeState.value.completed) {
    throw new Error('It failed')
  } else {
    console.log('The loadingCompleted reducer works!');
  }
}

testLoadingSlice();