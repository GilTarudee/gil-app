def calculator(x,y,sym):
    if sym == "+":
        return x+y
    elif sym == "-":
        return x-y
    elif sym == "*":
        return x*y
    elif sym == "/":
        return x/y

def solve_equation(equa):
    num_set = equa.split("+")
    b = []
    each_symbol = ""
    for i in range(len(num_set)):
        try:
            
            b.append(float(num_set[i]))
        except ValueError:
            a = num_set[i].split("-")
            for ii in range(len(a)):
                try:
                    
                    b.append(float(a[ii]))
                except ValueError:
                    c = a[ii].split("*")
                    for iii in range(len(c)):
                        try:
                            
                            b.append(float(c[iii]))
                        except ValueError:
                            d = c[iii].split("/")
                            for i4 in range(len(d)):
                                try:
                                    
                                    b.append(float(d[i4]))
                                except ValueError:
                                    print("Error")

    for i in equa:
        if i == "+" or i == "-" or i == "*" or i == "/":
            each_symbol = each_symbol + i


    index = each_symbol.find("*")
    index2 = each_symbol.find("/")
    while index != -1 or index2 != -1:
        if index != -1 :
            x1 = calculator(b[index],b[index+1],each_symbol[index])
            b[index] = x1
            b.remove(b[index+1])
            each_symbol = each_symbol[:index] + each_symbol[index + 1:]
            index = each_symbol.find("*")
            index2 = each_symbol.find("/")
        elif index2 != -1 :
            x1 = calculator(b[index2],b[index2+1],each_symbol[index2])
            b[index2] = x1
            b.remove(b[index2+1])
            each_symbol = each_symbol[:index2] + each_symbol[index2 + 1:]
            index2 = each_symbol.find("/")
            index = each_symbol.find("*")

    index3 = each_symbol.find("+")
    index4 = each_symbol.find("-")
    if index3 != -1 or index4 != -1:
        for i in range(len(b)-1):
            x1 = calculator(b[i],b[i+1],each_symbol[i])
            b[i+1] = x1
        return x1
    else:
        return b[0]


def test_resolve():
    equa = "10*2*4-5+1"
    assert solve_equation(equa) == 76
    equa = "1*1/1"
    assert solve_equation(equa) == 1
    equa = "1+1"
    assert solve_equation(equa) == 2
    equa = "1*2+3-7/5"
    assert solve_equation(equa) == 3.6
    equa = "1*2*3*4/5/6/7"
    assert solve_equation(equa) == 1*2*3*4/5/6/7

test_resolve()


