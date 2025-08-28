#include<iostream>
using namespace std;

void sub(string str,int index,string s){
    
    if(index==str.length()){
        cout<<s;
        cout<<endl;
        return;
    }
    sub(str,index+1,s);
    s.push_back(str[index]);
    sub(str,index+1,s);
    


}
int main(){
    string str="abc";
    int index=0;
    sub(str,0,"");
}