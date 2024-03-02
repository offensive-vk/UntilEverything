def getDataType(data):
    datatype = type(data).__name__
    print(f"DataType of {data} is {datatype}\n")
    return datatype

res = getDataType([3534,6436,6346])
# print(res)

getDataType({"src": 53.25})