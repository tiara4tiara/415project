'use strict';

module.exports = {
  meta: {
    type: 'suggestion',
    docs: {},
    schema: []
  },

  create(context) {
    // ignore non-modules
    if (context.parserOptions.sourceType !== 'module') {
      return {};
    }

    const preferNamed = 'Prefer named exports.';
    const noAliasDefault = (_ref) => {
      let local = _ref.local;
      return `Do not alias \`${local.name}\` as \`default\`. Just export ` + `\`${local.name}\` itself instead.`;
    };

    return {
      ExportDefaultDeclaration(node) {
        context.report({ node, message: preferNamed });
      },

      ExportNamedDeclaration(node) {
        node.specifiers.forEach(specifier => {
          if (specifier.type === 'ExportDefaultSpecifier' && specifier.exported.name === 'default') {
            context.report({ node, message: preferNamed });
          } else if (specifier.type === 'ExportSpecifier' && specifier.exported.name === 'default') {
            context.report({ node, message: noAliasDefault(specifier) });
          }
        });
      }
    };
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlcy9uby1kZWZhdWx0LWV4cG9ydC5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwibWV0YSIsInR5cGUiLCJkb2NzIiwic2NoZW1hIiwiY3JlYXRlIiwiY29udGV4dCIsInBhcnNlck9wdGlvbnMiLCJzb3VyY2VUeXBlIiwicHJlZmVyTmFtZWQiLCJub0FsaWFzRGVmYXVsdCIsImxvY2FsIiwibmFtZSIsIkV4cG9ydERlZmF1bHREZWNsYXJhdGlvbiIsIm5vZGUiLCJyZXBvcnQiLCJtZXNzYWdlIiwiRXhwb3J0TmFtZWREZWNsYXJhdGlvbiIsInNwZWNpZmllcnMiLCJmb3JFYWNoIiwic3BlY2lmaWVyIiwiZXhwb3J0ZWQiXSwibWFwcGluZ3MiOiI7O0FBQUFBLE9BQU9DLE9BQVAsR0FBaUI7QUFDZkMsUUFBTTtBQUNKQyxVQUFNLFlBREY7QUFFSkMsVUFBTSxFQUZGO0FBR0pDLFlBQVE7QUFISixHQURTOztBQU9mQyxTQUFPQyxPQUFQLEVBQWdCO0FBQ2Q7QUFDQSxRQUFJQSxRQUFRQyxhQUFSLENBQXNCQyxVQUF0QixLQUFxQyxRQUF6QyxFQUFtRDtBQUNqRCxhQUFPLEVBQVA7QUFDRDs7QUFFRCxVQUFNQyxjQUFjLHVCQUFwQjtBQUNBLFVBQU1DLGlCQUFpQjtBQUFBLFVBQUVDLEtBQUYsUUFBRUEsS0FBRjtBQUFBLGFBQ3BCLGtCQUFpQkEsTUFBTUMsSUFBSyxpQ0FBN0IsR0FDQyxLQUFJRCxNQUFNQyxJQUFLLG9CQUZLO0FBQUEsS0FBdkI7O0FBSUEsV0FBTztBQUNMQywrQkFBeUJDLElBQXpCLEVBQStCO0FBQzdCUixnQkFBUVMsTUFBUixDQUFlLEVBQUNELElBQUQsRUFBT0UsU0FBU1AsV0FBaEIsRUFBZjtBQUNELE9BSEk7O0FBS0xRLDZCQUF1QkgsSUFBdkIsRUFBNkI7QUFDM0JBLGFBQUtJLFVBQUwsQ0FBZ0JDLE9BQWhCLENBQXdCQyxhQUFhO0FBQ25DLGNBQUlBLFVBQVVsQixJQUFWLEtBQW1CLHdCQUFuQixJQUNBa0IsVUFBVUMsUUFBVixDQUFtQlQsSUFBbkIsS0FBNEIsU0FEaEMsRUFDMkM7QUFDekNOLG9CQUFRUyxNQUFSLENBQWUsRUFBQ0QsSUFBRCxFQUFPRSxTQUFTUCxXQUFoQixFQUFmO0FBQ0QsV0FIRCxNQUdPLElBQUlXLFVBQVVsQixJQUFWLEtBQW1CLGlCQUFuQixJQUNQa0IsVUFBVUMsUUFBVixDQUFtQlQsSUFBbkIsS0FBNEIsU0FEekIsRUFDb0M7QUFDekNOLG9CQUFRUyxNQUFSLENBQWUsRUFBQ0QsSUFBRCxFQUFPRSxTQUFTTixlQUFlVSxTQUFmLENBQWhCLEVBQWY7QUFDRDtBQUNGLFNBUkQ7QUFTRDtBQWZJLEtBQVA7QUFpQkQ7QUFuQ2MsQ0FBakIiLCJmaWxlIjoibm8tZGVmYXVsdC1leHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgbWV0YToge1xuICAgIHR5cGU6ICdzdWdnZXN0aW9uJyxcbiAgICBkb2NzOiB7fSxcbiAgICBzY2hlbWE6IFtdLFxuICB9LFxuXG4gIGNyZWF0ZShjb250ZXh0KSB7XG4gICAgLy8gaWdub3JlIG5vbi1tb2R1bGVzXG4gICAgaWYgKGNvbnRleHQucGFyc2VyT3B0aW9ucy5zb3VyY2VUeXBlICE9PSAnbW9kdWxlJykge1xuICAgICAgcmV0dXJuIHt9XG4gICAgfVxuXG4gICAgY29uc3QgcHJlZmVyTmFtZWQgPSAnUHJlZmVyIG5hbWVkIGV4cG9ydHMuJ1xuICAgIGNvbnN0IG5vQWxpYXNEZWZhdWx0ID0gKHtsb2NhbH0pID0+XG4gICAgICBgRG8gbm90IGFsaWFzIFxcYCR7bG9jYWwubmFtZX1cXGAgYXMgXFxgZGVmYXVsdFxcYC4gSnVzdCBleHBvcnQgYCArXG4gICAgICBgXFxgJHtsb2NhbC5uYW1lfVxcYCBpdHNlbGYgaW5zdGVhZC5gXG5cbiAgICByZXR1cm4ge1xuICAgICAgRXhwb3J0RGVmYXVsdERlY2xhcmF0aW9uKG5vZGUpIHtcbiAgICAgICAgY29udGV4dC5yZXBvcnQoe25vZGUsIG1lc3NhZ2U6IHByZWZlck5hbWVkfSlcbiAgICAgIH0sXG5cbiAgICAgIEV4cG9ydE5hbWVkRGVjbGFyYXRpb24obm9kZSkge1xuICAgICAgICBub2RlLnNwZWNpZmllcnMuZm9yRWFjaChzcGVjaWZpZXIgPT4ge1xuICAgICAgICAgIGlmIChzcGVjaWZpZXIudHlwZSA9PT0gJ0V4cG9ydERlZmF1bHRTcGVjaWZpZXInICYmXG4gICAgICAgICAgICAgIHNwZWNpZmllci5leHBvcnRlZC5uYW1lID09PSAnZGVmYXVsdCcpIHtcbiAgICAgICAgICAgIGNvbnRleHQucmVwb3J0KHtub2RlLCBtZXNzYWdlOiBwcmVmZXJOYW1lZH0pXG4gICAgICAgICAgfSBlbHNlIGlmIChzcGVjaWZpZXIudHlwZSA9PT0gJ0V4cG9ydFNwZWNpZmllcicgJiZcbiAgICAgICAgICAgICAgc3BlY2lmaWVyLmV4cG9ydGVkLm5hbWUgPT09ICdkZWZhdWx0Jykge1xuICAgICAgICAgICAgY29udGV4dC5yZXBvcnQoe25vZGUsIG1lc3NhZ2U6IG5vQWxpYXNEZWZhdWx0KHNwZWNpZmllcil9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgfVxuICB9LFxufVxuIl19