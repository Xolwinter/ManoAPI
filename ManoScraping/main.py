# This is a sample Python script.
import urllib3
import csv
from bs4 import BeautifulSoup
import pandas as pd

# Press Maj+F10 to execute it or replace it with your code.
# Press Double Shift to search everywhere for classes, files, tool windows, actions, and settings.
def scrap(competition,equipeP):
    print("competition",competition)
    if(competition=="url"):
        return None
    if(competition==""):
        return None
    url = competition
    http = urllib3.PoolManager()
    response = http.request('GET' , url , preload_content=False)
    response.autoClose = False

    bs = BeautifulSoup(response.data, 'html.parser')
    equipes = bs.find_all('div', {'class':'scoreboard_contestantLabel'})
    equipeFinal = list()
    equipetemp2 = list()
    print("equipe",equipes)
    for equipe in equipes:
        index1 = str(equipe)[2:].find(">")
        index2 = str(equipe)[2:].find("<")
        equipetemp = str(equipe)[index1+16:index2-7]
        equipetemp = equipetemp.replace("  ","")
        equipetemp = equipetemp.replace("\n", "")

        equipetemp2.append(equipetemp)
        if(len(equipetemp2)==2):
            equipeFinal.append(equipetemp2)
            equipetemp2 = list()


    cotes = bs.find_all('span', {'class': 'oddValue'})
    cotesFinal = list()
    cotesTemp = list()
    for cote in cotes:
        index1 = str(cote)[2:].find(">")
        index2 = str(cote)[2:].find("<")
        cotesTemp.append(str(cote)[index1+3:index2+2])
        if(len(cotesTemp)==3):
            cotesFinal.append(cotesTemp)
            cotesTemp = list()

    match = list()
    i = 0
    j=0
    print("equipefinale", equipeFinal)
    print("coteFinale", cotesFinal)
    while j < len(cotesFinal):
        if(cotesFinal[j].indexOf("Parier"))
        
    while i < len(equipeFinal):
        
        match.append([equipeFinal[i],cotesFinal[i*2]])
        i+=1
    print("match returned", match)
    return match

def findCote(equipe,matches):

    for match in matches:
        if(match[0][0]==equipe):
            return match[1][0]
        elif(match[0][1]==equipe):
            return match[1][2]

    return None

def writeCsv(csvUrl,equipe,cote):

    print(df.head())
    index= df.index[df['Equipe']==equipe]
    print(index[0])
    df.loc[index[0],"Cotes"] = cote
    print(df)



def print_hi(name):
    # Use a breakpoint in the code line below to debug your script.
    print(f'Hi, {name}')  # Press Ctrl+F8 to toggle the breakpoint.

def getInput(csvUrl):

    data = list()
    with open(csvUrl, newline='') as csvfile:
        reader = csv.reader(csvfile, delimiter=',', quotechar='|')
        for row in reader:
            data.append(row[0].split(";"))
            #data.append(str(row).split(";"))
    print(data)
    return data
# Press the green button in the gutter to run the script.
if __name__ == '__main__':
    print_hi('PyCharm')
    input = getInput("ManoProno_Teams.csv")
    df = pd.read_csv("ManoProno_Teams.csv", sep=";", encoding="latin1")
    for inputTemp in input:
        print("inputTemp",inputTemp[3])
        match = scrap(inputTemp[1])
        if(match==None):
            print("Error : Invalid Ligue")
            continue
        cote = findCote(inputTemp[3], match)
        print(cote)
        if(cote==None):
            print("Error : Match Not Found")
            continue
        writeCsv(df,inputTemp[3], cote)
        print("ManoProno_Teams.csv",inputTemp[3],cote)
        #print(match)
        #print(cote)
    df.to_csv("ManoProno_Teams.csv", index=False, encoding="latin1", sep=";")
# See PyCharm help at https://www.jetbrains.com/help/pycharm/
