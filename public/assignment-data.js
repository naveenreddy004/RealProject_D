/**
 * avRoN Tech — Daily LeetCode Assignments
 * 45 days · 2 problems per day · Easy → Medium → 3 Hard
 */
const ASSIGNMENTS = [
  // ─── DAYS 1-5 · Arrays Basics ───────────────────────────────────────────────
  {
    day: 1,
    problems: [
      {
        id: 1,
        title: "Two Sum",
        difficulty: "Easy",
        url: "https://leetcode.com/problems/two-sum/",
        topic: "Arrays & Hashing",
        hint: "Use a HashMap to store each number's complement and index"
      },
      {
        id: 26,
        title: "Remove Duplicates from Sorted Array",
        difficulty: "Easy",
        url: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/",
        topic: "Arrays",
        hint: "Use two pointers — one slow writer, one fast reader"
      }
    ]
  },
  {
    day: 2,
    problems: [
      {
        id: 121,
        title: "Best Time to Buy and Sell Stock",
        difficulty: "Easy",
        url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
        topic: "Arrays",
        hint: "Track the minimum price seen so far and update max profit"
      },
      {
        id: 217,
        title: "Contains Duplicate",
        difficulty: "Easy",
        url: "https://leetcode.com/problems/contains-duplicate/",
        topic: "Arrays & Hashing",
        hint: "Add elements to a HashSet; return true if add() returns false"
      }
    ]
  },
  {
    day: 3,
    problems: [
      {
        id: 53,
        title: "Maximum Subarray",
        difficulty: "Easy",
        url: "https://leetcode.com/problems/maximum-subarray/",
        topic: "Arrays / Kadane's Algorithm",
        hint: "Keep a running sum; reset to 0 whenever it goes negative"
      },
      {
        id: 88,
        title: "Merge Sorted Array",
        difficulty: "Easy",
        url: "https://leetcode.com/problems/merge-sorted-array/",
        topic: "Arrays / Two Pointers",
        hint: "Fill from the back using three pointers to avoid overwriting"
      }
    ]
  },
  {
    day: 4,
    problems: [
      {
        id: 283,
        title: "Move Zeroes",
        difficulty: "Easy",
        url: "https://leetcode.com/problems/move-zeroes/",
        topic: "Arrays / Two Pointers",
        hint: "Snowball non-zero elements forward with a write pointer"
      },
      {
        id: 448,
        title: "Find All Numbers Disappeared in an Array",
        difficulty: "Easy",
        url: "https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/",
        topic: "Arrays & Hashing",
        hint: "Negate values at indices to mark presence, then collect positives"
      }
    ]
  },
  {
    day: 5,
    problems: [
      {
        id: 724,
        title: "Find Pivot Index",
        difficulty: "Easy",
        url: "https://leetcode.com/problems/find-pivot-index/",
        topic: "Arrays / Prefix Sum",
        hint: "Prefix sum: leftSum == totalSum - leftSum - nums[i]"
      },
      {
        id: 1,
        title: "Running Sum of 1d Array",
        difficulty: "Easy",
        url: "https://leetcode.com/problems/running-sum-of-1d-array/",
        topic: "Arrays / Prefix Sum",
        hint: "Accumulate each element into the previous running total"
      }
    ]
  },
  // ─── DAYS 6-10 · Strings ────────────────────────────────────────────────────
  {
    day: 6,
    problems: [
      {
        id: 242,
        title: "Valid Anagram",
        difficulty: "Easy",
        url: "https://leetcode.com/problems/valid-anagram/",
        topic: "Strings & Hashing",
        hint: "Count character frequencies with a HashMap or int[26]"
      },
      {
        id: 125,
        title: "Valid Palindrome",
        difficulty: "Easy",
        url: "https://leetcode.com/problems/valid-palindrome/",
        topic: "Strings / Two Pointers",
        hint: "Skip non-alphanumeric chars; compare chars from both ends"
      }
    ]
  },
  {
    day: 7,
    problems: [
      {
        id: 14,
        title: "Longest Common Prefix",
        difficulty: "Easy",
        url: "https://leetcode.com/problems/longest-common-prefix/",
        topic: "Strings",
        hint: "Use the first word as reference; shorten while others don't start with it"
      },
      {
        id: 344,
        title: "Reverse String",
        difficulty: "Easy",
        url: "https://leetcode.com/problems/reverse-string/",
        topic: "Strings / Two Pointers",
        hint: "Swap characters using left and right pointers moving inward"
      }
    ]
  },
  {
    day: 8,
    problems: [
      {
        id: 387,
        title: "First Unique Character in a String",
        difficulty: "Easy",
        url: "https://leetcode.com/problems/first-unique-character-in-a-string/",
        topic: "Strings & Hashing",
        hint: "Build frequency map, then return first char with count == 1"
      },
      {
        id: 383,
        title: "Ransom Note",
        difficulty: "Easy",
        url: "https://leetcode.com/problems/ransom-note/",
        topic: "Strings & Hashing",
        hint: "Count magazine letters; subtract ransomNote counts and check negatives"
      }
    ]
  },
  {
    day: 9,
    problems: [
      {
        id: 28,
        title: "Find the Index of the First Occurrence in a String",
        difficulty: "Easy",
        url: "https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/",
        topic: "Strings",
        hint: "Use indexOf or slide a window of needle.length across haystack"
      },
      {
        id: 58,
        title: "Length of Last Word",
        difficulty: "Easy",
        url: "https://leetcode.com/problems/length-of-last-word/",
        topic: "Strings",
        hint: "Trim trailing spaces, then count backwards to the next space"
      }
    ]
  },
  {
    day: 10,
    problems: [
      {
        id: 20,
        title: "Valid Parentheses",
        difficulty: "Easy",
        url: "https://leetcode.com/problems/valid-parentheses/",
        topic: "Stack",
        hint: "Push opening brackets; pop and match when you see a closing one"
      },
      {
        id: 680,
        title: "Valid Palindrome II",
        difficulty: "Easy",
        url: "https://leetcode.com/problems/valid-palindrome-ii/",
        topic: "Strings / Two Pointers",
        hint: "On mismatch, check if skipping left or right character still gives a palindrome"
      }
    ]
  },
  // ─── DAYS 11-15 · Easy Linked Lists & Math ──────────────────────────────────
  {
    day: 11,
    problems: [
      {
        id: 206,
        title: "Reverse Linked List",
        difficulty: "Easy",
        url: "https://leetcode.com/problems/reverse-linked-list/",
        topic: "Linked List",
        hint: "Iterate with prev/curr pointers, flipping next references"
      },
      {
        id: 21,
        title: "Merge Two Sorted Lists",
        difficulty: "Easy",
        url: "https://leetcode.com/problems/merge-two-sorted-lists/",
        topic: "Linked List",
        hint: "Use a dummy head node; compare heads and advance the smaller one"
      }
    ]
  },
  {
    day: 12,
    problems: [
      {
        id: 141,
        title: "Linked List Cycle",
        difficulty: "Easy",
        url: "https://leetcode.com/problems/linked-list-cycle/",
        topic: "Linked List / Two Pointers",
        hint: "Floyd's cycle detection: slow moves 1, fast moves 2 steps"
      },
      {
        id: 83,
        title: "Remove Duplicates from Sorted List",
        difficulty: "Easy",
        url: "https://leetcode.com/problems/remove-duplicates-from-sorted-list/",
        topic: "Linked List",
        hint: "Skip next nodes while curr.val == curr.next.val"
      }
    ]
  },
  {
    day: 13,
    problems: [
      {
        id: 9,
        title: "Palindrome Number",
        difficulty: "Easy",
        url: "https://leetcode.com/problems/palindrome-number/",
        topic: "Math",
        hint: "Reverse the second half of the number and compare to the first half"
      },
      {
        id: 7,
        title: "Reverse Integer",
        difficulty: "Easy",
        url: "https://leetcode.com/problems/reverse-integer/",
        topic: "Math",
        hint: "Pop digits with % 10 and push them; check 32-bit overflow before each push"
      }
    ]
  },
  {
    day: 14,
    problems: [
      {
        id: 13,
        title: "Roman to Integer",
        difficulty: "Easy",
        url: "https://leetcode.com/problems/roman-to-integer/",
        topic: "Math & Strings",
        hint: "Subtract when a smaller value precedes a larger one, otherwise add"
      },
      {
        id: 66,
        title: "Plus One",
        difficulty: "Easy",
        url: "https://leetcode.com/problems/plus-one/",
        topic: "Arrays / Math",
        hint: "Traverse from end; if digit < 9 just increment and return, else set to 0"
      }
    ]
  },
  {
    day: 15,
    problems: [
      {
        id: 234,
        title: "Palindrome Linked List",
        difficulty: "Easy",
        url: "https://leetcode.com/problems/palindrome-linked-list/",
        topic: "Linked List / Two Pointers",
        hint: "Find mid with slow/fast, reverse second half, then compare both halves"
      },
      {
        id: 160,
        title: "Intersection of Two Linked Lists",
        difficulty: "Easy",
        url: "https://leetcode.com/problems/intersection-of-two-linked-lists/",
        topic: "Linked List / Two Pointers",
        hint: "Switch heads when a pointer reaches null — they meet at intersection"
      }
    ]
  },
  // ─── DAYS 16-20 · Easy/Medium Arrays & Two Pointers ────────────────────────
  {
    day: 16,
    problems: [
      {
        id: 167,
        title: "Two Sum II - Input Array Is Sorted",
        difficulty: "Medium",
        url: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/",
        topic: "Two Pointers",
        hint: "Move left pointer right if sum too small, right pointer left if too large"
      },
      {
        id: 15,
        title: "3Sum",
        difficulty: "Medium",
        url: "https://leetcode.com/problems/3sum/",
        topic: "Two Pointers",
        hint: "Sort array, fix one element, then use two pointers for the rest"
      }
    ]
  },
  {
    day: 17,
    problems: [
      {
        id: 11,
        title: "Container With Most Water",
        difficulty: "Medium",
        url: "https://leetcode.com/problems/container-with-most-water/",
        topic: "Two Pointers",
        hint: "Move the pointer at the shorter height inward each step"
      },
      {
        id: 189,
        title: "Rotate Array",
        difficulty: "Medium",
        url: "https://leetcode.com/problems/rotate-array/",
        topic: "Arrays",
        hint: "Reverse entire array, then reverse first k and last n-k elements"
      }
    ]
  },
  {
    day: 18,
    problems: [
      {
        id: 238,
        title: "Product of Array Except Self",
        difficulty: "Medium",
        url: "https://leetcode.com/problems/product-of-array-except-self/",
        topic: "Arrays / Prefix Product",
        hint: "Build left-product pass, then multiply right-products in a second pass"
      },
      {
        id: 56,
        title: "Merge Intervals",
        difficulty: "Medium",
        url: "https://leetcode.com/problems/merge-intervals/",
        topic: "Arrays / Sorting",
        hint: "Sort by start; merge when current start <= last merged end"
      }
    ]
  },
  {
    day: 19,
    problems: [
      {
        id: 209,
        title: "Minimum Size Subarray Sum",
        difficulty: "Medium",
        url: "https://leetcode.com/problems/minimum-size-subarray-sum/",
        topic: "Sliding Window",
        hint: "Expand right pointer, shrink left when window sum >= target"
      },
      {
        id: 567,
        title: "Permutation in String",
        difficulty: "Medium",
        url: "https://leetcode.com/problems/permutation-in-string/",
        topic: "Sliding Window & Hashing",
        hint: "Fixed-size window of s1.length; compare frequency arrays"
      }
    ]
  },
  {
    day: 20,
    problems: [
      {
        id: 3,
        title: "Longest Substring Without Repeating Characters",
        difficulty: "Medium",
        url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
        topic: "Sliding Window & Hashing",
        hint: "Expand right, move left past the duplicate when a repeat is found"
      },
      {
        id: 438,
        title: "Find All Anagrams in a String",
        difficulty: "Medium",
        url: "https://leetcode.com/problems/find-all-anagrams-in-a-string/",
        topic: "Sliding Window & Hashing",
        hint: "Slide a window of p.length; record start index when freq maps match"
      }
    ]
  },
  // ─── DAYS 21-25 · Sliding Window cont. & Stack/Queue ────────────────────────
  {
    day: 21,
    problems: [
      {
        id: 424,
        title: "Longest Repeating Character Replacement",
        difficulty: "Medium",
        url: "https://leetcode.com/problems/longest-repeating-character-replacement/",
        topic: "Sliding Window",
        hint: "Window size - maxFreq <= k; shrink left when constraint breaks"
      },
      {
        id: 239,
        title: "Sliding Window Maximum",
        difficulty: "Hard",
        url: "https://leetcode.com/problems/sliding-window-maximum/",
        topic: "Sliding Window / Deque",
        hint: "Use a monotonic decreasing deque; front is always the current window max"
      }
    ]
  },
  {
    day: 22,
    problems: [
      {
        id: 155,
        title: "Min Stack",
        difficulty: "Medium",
        url: "https://leetcode.com/problems/min-stack/",
        topic: "Stack",
        hint: "Maintain a second stack tracking the minimum at each level"
      },
      {
        id: 150,
        title: "Evaluate Reverse Polish Notation",
        difficulty: "Medium",
        url: "https://leetcode.com/problems/evaluate-reverse-polish-notation/",
        topic: "Stack",
        hint: "Push numbers; on operator pop two values, compute, push result"
      }
    ]
  },
  {
    day: 23,
    problems: [
      {
        id: 739,
        title: "Daily Temperatures",
        difficulty: "Medium",
        url: "https://leetcode.com/problems/daily-temperatures/",
        topic: "Stack / Monotonic Stack",
        hint: "Monotonic decreasing stack of indices; pop when a warmer day is found"
      },
      {
        id: 496,
        title: "Next Greater Element I",
        difficulty: "Easy",
        url: "https://leetcode.com/problems/next-greater-element-i/",
        topic: "Stack / Monotonic Stack",
        hint: "Build next-greater map for nums2 using a stack, then look up nums1 elements"
      }
    ]
  },
  {
    day: 24,
    problems: [
      {
        id: 347,
        title: "Top K Frequent Elements",
        difficulty: "Medium",
        url: "https://leetcode.com/problems/top-k-frequent-elements/",
        topic: "Arrays & Hashing / Bucket Sort",
        hint: "Count frequencies, then bucket by frequency and collect from the top"
      },
      {
        id: 271,
        title: "Encode and Decode Strings",
        difficulty: "Medium",
        url: "https://leetcode.com/problems/encode-and-decode-strings/",
        topic: "Strings & Hashing",
        hint: "Prefix each word with its length and a delimiter like '#'"
      }
    ]
  },
  {
    day: 25,
    problems: [
      {
        id: 128,
        title: "Longest Consecutive Sequence",
        difficulty: "Medium",
        url: "https://leetcode.com/problems/longest-consecutive-sequence/",
        topic: "Arrays & Hashing",
        hint: "Add all numbers to a HashSet; only start counting from sequence beginnings"
      },
      {
        id: 36,
        title: "Valid Sudoku",
        difficulty: "Medium",
        url: "https://leetcode.com/problems/valid-sudoku/",
        topic: "Arrays & Hashing",
        hint: "Use three sets of HashSets for rows, cols, and 3x3 boxes"
      }
    ]
  },
  // ─── DAYS 26-30 · Binary Search & Trees ─────────────────────────────────────
  {
    day: 26,
    problems: [
      {
        id: 704,
        title: "Binary Search",
        difficulty: "Easy",
        url: "https://leetcode.com/problems/binary-search/",
        topic: "Binary Search",
        hint: "Classic lo/hi/mid pattern; move boundaries based on comparison"
      },
      {
        id: 74,
        title: "Search a 2D Matrix",
        difficulty: "Medium",
        url: "https://leetcode.com/problems/search-a-2d-matrix/",
        topic: "Binary Search",
        hint: "Treat the matrix as a flat sorted array; map mid index to row/col"
      }
    ]
  },
  {
    day: 27,
    problems: [
      {
        id: 153,
        title: "Find Minimum in Rotated Sorted Array",
        difficulty: "Medium",
        url: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",
        topic: "Binary Search",
        hint: "If mid > right, minimum is in the right half; otherwise left half"
      },
      {
        id: 33,
        title: "Search in Rotated Sorted Array",
        difficulty: "Medium",
        url: "https://leetcode.com/problems/search-in-rotated-sorted-array/",
        topic: "Binary Search",
        hint: "Identify which half is sorted, then check if target lies within it"
      }
    ]
  },
  {
    day: 28,
    problems: [
      {
        id: 144,
        title: "Binary Tree Preorder Traversal",
        difficulty: "Easy",
        url: "https://leetcode.com/problems/binary-tree-preorder-traversal/",
        topic: "Trees / DFS",
        hint: "Visit root, recurse left, recurse right (or use a stack iteratively)"
      },
      {
        id: 104,
        title: "Maximum Depth of Binary Tree",
        difficulty: "Easy",
        url: "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
        topic: "Trees / DFS",
        hint: "Return 1 + max(left depth, right depth) recursively"
      }
    ]
  },
  {
    day: 29,
    problems: [
      {
        id: 226,
        title: "Invert Binary Tree",
        difficulty: "Easy",
        url: "https://leetcode.com/problems/invert-binary-tree/",
        topic: "Trees / DFS",
        hint: "Swap left and right children at every node recursively"
      },
      {
        id: 100,
        title: "Same Tree",
        difficulty: "Easy",
        url: "https://leetcode.com/problems/same-tree/",
        topic: "Trees / DFS",
        hint: "Both null → true; one null → false; values differ → false; recurse both"
      }
    ]
  },
  {
    day: 30,
    problems: [
      {
        id: 102,
        title: "Binary Tree Level Order Traversal",
        difficulty: "Medium",
        url: "https://leetcode.com/problems/binary-tree-level-order-traversal/",
        topic: "Trees / BFS",
        hint: "Use a queue; process all nodes at the current level before moving to next"
      },
      {
        id: 199,
        title: "Binary Tree Right Side View",
        difficulty: "Medium",
        url: "https://leetcode.com/problems/binary-tree-right-side-view/",
        topic: "Trees / BFS",
        hint: "BFS level order; capture the last node in each level"
      }
    ]
  },
  // ─── DAYS 31-35 · Trees (BST) & HashMaps ────────────────────────────────────
  {
    day: 31,
    problems: [
      {
        id: 235,
        title: "Lowest Common Ancestor of a Binary Search Tree",
        difficulty: "Medium",
        url: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/",
        topic: "Trees / BST",
        hint: "If both values < root go left; both > root go right; else current is LCA"
      },
      {
        id: 98,
        title: "Validate Binary Search Tree",
        difficulty: "Medium",
        url: "https://leetcode.com/problems/validate-binary-search-tree/",
        topic: "Trees / BST",
        hint: "Pass min/max bounds recursively; each node must be strictly within them"
      }
    ]
  },
  {
    day: 32,
    problems: [
      {
        id: 230,
        title: "Kth Smallest Element in a BST",
        difficulty: "Medium",
        url: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/",
        topic: "Trees / BST",
        hint: "In-order traversal gives sorted order; stop at the k-th element"
      },
      {
        id: 105,
        title: "Construct Binary Tree from Preorder and Inorder Traversal",
        difficulty: "Medium",
        url: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",
        topic: "Trees / DFS",
        hint: "Preorder root splits inorder into left and right subtrees; recurse"
      }
    ]
  },
  {
    day: 33,
    problems: [
      {
        id: 572,
        title: "Subtree of Another Tree",
        difficulty: "Easy",
        url: "https://leetcode.com/problems/subtree-of-another-tree/",
        topic: "Trees / DFS",
        hint: "At each node check isSameTree; recurse into left and right if not"
      },
      {
        id: 543,
        title: "Diameter of Binary Tree",
        difficulty: "Easy",
        url: "https://leetcode.com/problems/diameter-of-binary-tree/",
        topic: "Trees / DFS",
        hint: "Diameter at each node = leftHeight + rightHeight; track global max"
      }
    ]
  },
  {
    day: 34,
    problems: [
      {
        id: 49,
        title: "Group Anagrams",
        difficulty: "Medium",
        url: "https://leetcode.com/problems/group-anagrams/",
        topic: "Arrays & Hashing",
        hint: "Sort each word as key, or use a char-count tuple as key in a HashMap"
      },
      {
        id: 146,
        title: "LRU Cache",
        difficulty: "Medium",
        url: "https://leetcode.com/problems/lru-cache/",
        topic: "Design / LinkedHashMap",
        hint: "Use LinkedHashMap with access-order=true for O(1) get and put"
      }
    ]
  },
  {
    day: 35,
    problems: [
      {
        id: 380,
        title: "Insert Delete GetRandom O(1)",
        difficulty: "Medium",
        url: "https://leetcode.com/problems/insert-delete-getrandom-o1/",
        topic: "Design / Hashing",
        hint: "ArrayList + HashMap; swap-delete keeps indices valid for O(1) removal"
      },
      {
        id: 295,
        title: "Find Median from Data Stream",
        difficulty: "Hard",
        url: "https://leetcode.com/problems/find-median-from-data-stream/",
        topic: "Heap / Design",
        hint: "Two heaps: max-heap for lower half, min-heap for upper half"
      }
    ]
  },
  // ─── DAYS 36-39 · DP Basics & Graphs Intro ──────────────────────────────────
  {
    day: 36,
    problems: [
      {
        id: 70,
        title: "Climbing Stairs",
        difficulty: "Easy",
        url: "https://leetcode.com/problems/climbing-stairs/",
        topic: "Dynamic Programming",
        hint: "dp[i] = dp[i-1] + dp[i-2]; it's Fibonacci with a different name"
      },
      {
        id: 198,
        title: "House Robber",
        difficulty: "Medium",
        url: "https://leetcode.com/problems/house-robber/",
        topic: "Dynamic Programming",
        hint: "dp[i] = max(dp[i-1], dp[i-2] + nums[i]); skip or rob current house"
      }
    ]
  },
  {
    day: 37,
    problems: [
      {
        id: 213,
        title: "House Robber II",
        difficulty: "Medium",
        url: "https://leetcode.com/problems/house-robber-ii/",
        topic: "Dynamic Programming",
        hint: "Run House Robber on [0..n-2] and [1..n-1], take the max"
      },
      {
        id: 300,
        title: "Longest Increasing Subsequence",
        difficulty: "Medium",
        url: "https://leetcode.com/problems/longest-increasing-subsequence/",
        topic: "Dynamic Programming",
        hint: "dp[i] = max dp[j]+1 for j<i where nums[j]<nums[i]; or use patience sort"
      }
    ]
  },
  {
    day: 38,
    problems: [
      {
        id: 200,
        title: "Number of Islands",
        difficulty: "Medium",
        url: "https://leetcode.com/problems/number-of-islands/",
        topic: "Graphs / DFS",
        hint: "DFS from each unvisited '1'; mark visited cells '0' as you go"
      },
      {
        id: 695,
        title: "Max Area of Island",
        difficulty: "Medium",
        url: "https://leetcode.com/problems/max-area-of-island/",
        topic: "Graphs / DFS",
        hint: "DFS returns the area of each island; track the global maximum"
      }
    ]
  },
  {
    day: 39,
    problems: [
      {
        id: 133,
        title: "Clone Graph",
        difficulty: "Medium",
        url: "https://leetcode.com/problems/clone-graph/",
        topic: "Graphs / BFS",
        hint: "HashMap maps original → clone; BFS to visit and wire all neighbors"
      },
      {
        id: 417,
        title: "Pacific Atlantic Water Flow",
        difficulty: "Medium",
        url: "https://leetcode.com/problems/pacific-atlantic-water-flow/",
        topic: "Graphs / BFS",
        hint: "BFS inward from each ocean border; result is the intersection of reachable sets"
      }
    ]
  },
  // ─── DAYS 40-42 · HARD Problems ─────────────────────────────────────────────
  {
    day: 40,
    problems: [
      {
        id: 42,
        title: "Trapping Rain Water",
        difficulty: "Hard",
        url: "https://leetcode.com/problems/trapping-rain-water/",
        topic: "Two Pointers / Arrays",
        hint: "Two pointers from both ends; water at each bar = min(maxL, maxR) - height[i]"
      },
      {
        id: 84,
        title: "Largest Rectangle in Histogram",
        difficulty: "Hard",
        url: "https://leetcode.com/problems/largest-rectangle-in-histogram/",
        topic: "Stack / Monotonic Stack",
        hint: "Monotonic increasing stack; pop and calculate width when a shorter bar appears"
      }
    ]
  },
  {
    day: 41,
    problems: [
      {
        id: 4,
        title: "Median of Two Sorted Arrays",
        difficulty: "Hard",
        url: "https://leetcode.com/problems/median-of-two-sorted-arrays/",
        topic: "Binary Search",
        hint: "Binary search on the smaller array's partition; balance left halves of both"
      },
      {
        id: 23,
        title: "Merge k Sorted Lists",
        difficulty: "Hard",
        url: "https://leetcode.com/problems/merge-k-sorted-lists/",
        topic: "Linked List / Heap",
        hint: "Use a min-heap of size k; always extract the smallest node and advance"
      }
    ]
  },
  {
    day: 42,
    problems: [
      {
        id: 32,
        title: "Longest Valid Parentheses",
        difficulty: "Hard",
        url: "https://leetcode.com/problems/longest-valid-parentheses/",
        topic: "Stack / Dynamic Programming",
        hint: "Stack stores indices; on ')' pop and compute length using current index minus top"
      },
      {
        id: 124,
        title: "Binary Tree Maximum Path Sum",
        difficulty: "Hard",
        url: "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
        topic: "Trees / DFS",
        hint: "At each node max path through it = node + max(0,left) + max(0,right); track global max"
      }
    ]
  },
  // ─── DAYS 43-45 · Medium Review ─────────────────────────────────────────────
  {
    day: 43,
    problems: [
      {
        id: 322,
        title: "Coin Change",
        difficulty: "Medium",
        url: "https://leetcode.com/problems/coin-change/",
        topic: "Dynamic Programming",
        hint: "dp[amount] = min coins; for each coin update dp[i] = min(dp[i], dp[i-coin]+1)"
      },
      {
        id: 518,
        title: "Coin Change II",
        difficulty: "Medium",
        url: "https://leetcode.com/problems/coin-change-ii/",
        topic: "Dynamic Programming",
        hint: "dp[i] += dp[i - coin] for each coin; unbounded knapsack pattern"
      }
    ]
  },
  {
    day: 44,
    problems: [
      {
        id: 207,
        title: "Course Schedule",
        difficulty: "Medium",
        url: "https://leetcode.com/problems/course-schedule/",
        topic: "Graphs / Topological Sort",
        hint: "Build adjacency list; detect cycle with DFS using UNVISITED/VISITING/VISITED states"
      },
      {
        id: 210,
        title: "Course Schedule II",
        difficulty: "Medium",
        url: "https://leetcode.com/problems/course-schedule-ii/",
        topic: "Graphs / Topological Sort",
        hint: "Kahn's algorithm: BFS from nodes with in-degree 0; append to result as you go"
      }
    ]
  },
  {
    day: 45,
    problems: [
      {
        id: 79,
        title: "Word Search",
        difficulty: "Medium",
        url: "https://leetcode.com/problems/word-search/",
        topic: "Graphs / Backtracking",
        hint: "DFS backtracking from every cell; mark visited with a sentinel, restore after"
      },
      {
        id: 62,
        title: "Unique Paths",
        difficulty: "Medium",
        url: "https://leetcode.com/problems/unique-paths/",
        topic: "Dynamic Programming",
        hint: "dp[i][j] = dp[i-1][j] + dp[i][j-1]; each cell = sum of paths from above and left"
      }
    ]
  }
];

// Make available as a module (Node) and as a global (browser)
if (typeof module !== "undefined" && module.exports) {
  module.exports = { ASSIGNMENTS };
}
