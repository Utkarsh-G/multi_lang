/*
cin, cout, cerror, clog <- four standard streams.

I wonder where clog goes to by default. Worth trying out. I also wonder how to config it.

*/
#include <iostream>

using namespace std;

void fileIn ();
void fileOut ();
//hahahahah :( How could I forget function declarations? One of the first things I learned in grade 9.
//But I don't think I'd need them if I define the functions before main.

int main() //must be of type int :(
{
    string i;
    cout << "Enter a value?\n"; 
    // I need to either write std::cout or using namespace std; above.
    cin >> i;
    cout << "The value you entered is " << i << "\n";

    //Don't have to explicitly write return 0.

    fileIn();
    fileOut();

    //probably blocking, just like all other non-js languages.

    
}

//files

#include <fstream>

void fileIn()
{
    string fileLine;

    ifstream myfile("basicio.in");

    if (myfile.is_open())
    {
        while (getline(myfile, fileLine)) // getline is part of std::istream
                //Other ways of reading is by using various overloadings of get()
        {
            cout << fileLine << "\n";
        }

        myfile.close();
    }

    else cout << "Unable to open file \n";

}

void fileOut()
{
    ofstream myfile("basicio.out");
    if(myfile.is_open())
    {
        myfile << "Adding first line from CPP basicio to file.\n";
        myfile << "Adding second and final line.\n";
        myfile.close();
    }

    else cout << "Unable to open file";
}