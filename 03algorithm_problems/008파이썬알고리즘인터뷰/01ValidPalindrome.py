class Solution:
    def isPalindrome(self, s: str) -> bool:
        # sss = ""
        # for c in s:
        #     if c.isalnum():
        #         sss += c.lower()
        # print(sss)
        # if sss == "":
        #     return True
        # for i in range(len(sss)):
        #     if sss[i] != sss[len(sss) - 1 - i]:
        #         return False
        # return True

        start = 0
        end = len(s) - 1
        new_s = s.lower()
        while (start < end):
            while not new_s[start].isalnum():
                start += 1
                if start == end:
                    return True
            while not new_s[end].isalnum():
                end -= 1
                if start == end:
                    return True
            if new_s[start] != new_s[end]:
                return False
            start += 1
            end -= 1
        return True


solution = Solution()
# solution.isPalindrome("A man, a plan, a canal: Panama")
assert solution.isPalindrome(".,") == True
assert solution.isPalindrome("A man, a plan, a canal: Panama") == True
assert solution.isPalindrome("...") == True
