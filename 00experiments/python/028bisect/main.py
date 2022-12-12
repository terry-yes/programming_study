import bisect
float_list = [1.0, 1.3, 2.3, 4.5]
i = bisect.bisect_left(float_list, 2.5)
print(i)
