package condition;
import java.util.*;

public class palindrom {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int n,r,temp,sum=0;
		Scanner sc=new Scanner(System.in);
		System.out.println("enter the numbers");
		n=sc.nextInt();
		temp=n;
		while(n>0)
		{		
			r=n%10;
			sum=(sum*10)+r;
			n=n/10;
		}
		if(temp==sum) {
			System.out.println("palindrome numbers");
		}
		else {
			System.out.println("not a palindrome numbers");
		}
	}

}
