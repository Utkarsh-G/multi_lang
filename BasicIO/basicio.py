#Reading from std in

s = input("pls giv bread: ")

# Unlike JS (which uses a callback), python blocks until input s is received.
# iirc, imperative languages all do that.

#Writing to std out

print("what you gave: " + s)


#Working with Files

#old way

f = open('basicio.in') # by default opens in read mode

f.close()

# recommended way. pie thon i c c 

with open('basicio.in') as f:
    read_data = f.read()
    read_line = f.readline() #This won't read anything since the entire file has already been read by the line above.

with open('basicio.out','w') as f:
    f.write(read_data)