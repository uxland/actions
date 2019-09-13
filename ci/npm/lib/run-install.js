module.exports = async tools => {
  try {
    const result = await tools.runInWorkspace('npm', ['install']);
    console.log(result);
  } catch (err) {
    throw err;
  }
};
