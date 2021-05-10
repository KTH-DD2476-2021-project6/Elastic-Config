import numpy as np
import matplotlib.pyplot as plt

#Our relevance scoring of  [Harry Potter and the Chamber of Secrets, Harry Potter and the Half-blood prince]
rellist1 = [3, 3, 3, 3, 3, 2, 3, 2, 2, 1, 1, 1, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
#Our relevance scoring of  [Harry Potter and the Chamber of Secrets, Sapiens: A brief History of HUmankind]
rellist2 = [3, 3, 3, 3, 3, 3, 2, 2, 3, 3, 3, 1, 0, 2, 2, 3, 0, 0, 1, 0, 1, 0, 3, 3, 3]
#Our relevance scoring of  [Harry Potter and the Chamber of Secrets, La carte et le territoire]
rellist3 = [3, 1, 2, 1, 0, 1, 0, 0, 0, 2, 2, 1, 0, 1, 2, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1]

totallist = np.array([rellist1, rellist2, rellist3])

#computes the nDCG of the list of relevance scores for the recommended books
def nDCG(rv):
    numerator = 0
    denominator = 0
    for i in range(0, len(rv)):
        numerator += (np.power(2, rv[i]) -1)/(np.log2(i+2))
    rv.sort(reverse=True)
    for i in range(0, len(rv)):
        denominator += (np.power(2, rv[i]) -1)/(np.log2(i+2))

    return numerator/denominator

#plots the precision for all the lists in one plot
def plotprecision(totallist):
    totalprecisionlist = []
    for i in range(0, len(totallist)):
        for j in range(0, len(totallist[i])):
            if totallist[i][j] ==0:
                totallist[i][j] =0
            else:
                totallist[i][j] = 1
    print(totallist)

    for i in range(0, len(totallist)):
        currentlist = []
        for j in range(0, len(totallist[i])):
            currentlist.append(np.sum(totallist[i][0:j+1])/(j+1))
        totalprecisionlist.append(currentlist)


    for i in range(0, len(totallist)):
        plt.plot(range(1, 26), totalprecisionlist[i], label=("List " + str(i+1)))
    plt.xlabel("Retrieved books")
    plt.ylabel("Precision")
    plt.title("Precision vs number of Retrieved books")

    plt.legend()
    plt.show()



print(nDCG(rellist1))
print(nDCG(rellist2))
print(nDCG(rellist3))
plotprecision(totallist)
