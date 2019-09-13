module.exports = async tools => {
  try {
    const result = await tools.runInWorkspace('npm', ['test']);
    console.log(result);
  } catch (err) {
    throw err;
  }
};
