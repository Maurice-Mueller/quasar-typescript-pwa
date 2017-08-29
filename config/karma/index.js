Error.stackTraceLimit = Infinity;

var testContext = require.context('./../../src/test', true, /\.test\.ts/);

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

var modules = requireAll(testContext);
