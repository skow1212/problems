/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const dfs = (crs, visited, map) => {
    if (visited.has(crs)) {
      return false;
    }
    if (!map.get(crs).length) {
      return true;
    }
    visited.add(crs);
    for (let pre of map.get(crs)) {
      if (!dfs(pre, visited, map)) {
        return false;
      }
    }
    visited.delete(crs);
    map.set(crs, []);
    return true;
  };
  let map = new Map();
  for (let i = 0; i < numCourses; i++) {
    map.set(i, []);
  }
  prerequisites.forEach((pre) => {
    map.get(pre[0]).push(pre[1]);
  });
  let visited = new Set();
  for (let crs = 0; crs < numCourses; crs++) {
    if (!dfs(crs, visited, map)) {
      return false;
    }
  }
  return true;
};

// var canFinish = function (numCourses, prerequisites) {
//   const q = [];
//   const map = new Map();
//   const indegree = Array(numCourses).fill(0);
//   for (const [e, v] of prerequisites) {
//     // build map map
//     if (map.has(v)) {
//       map.get(v).push(e);
//     } else {
//       map.set(v, [e]);
//     }
//     // build indegree array
//     indegree[e]++;
//   }

//   for (let i = 0; i < indegree.length; i++) {
//     if (indegree[i] === 0) q.push(i);
//   }
//   let count = 0;
//   while (q.length) {
//     const v = q.shift();
//     if (map.has(v)) {
//       for (const e of map.get(v)) {
//         indegree[e]--;
//         if (indegree[e] === 0) q.push(e);
//       }
//     }
//     count++;
//   }

//   return numCourses === count;
// };