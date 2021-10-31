import java.util.Scanner;
public class FindElementInArray {

	public static void main(String[] args) {
		
		Scanner scn = new Scanner(System.in);
		
		int tc = scn.nextInt();
		
		int arr[] = new int[tc];
		
		
		
		for (int i = 0; i < arr.length; i++) {
			arr[i] = scn.nextInt();
		}
		
		int d = scn.nextInt();
		
		int ans = -1;
		
		for (int i = 0; i < arr.length; i++) {
			if(arr[i]==d)
			{
				ans = i;
				break;
			}
			
		}
		
		System.out.println(ans);
		
		
	}
	
}
