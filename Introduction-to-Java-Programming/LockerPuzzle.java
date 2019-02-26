/* 7.23
(Game: locker puzzle) A school has 100 lockers and 100 students. All lockers are closed on the first day of school. 
As the students enter, the first student, denoted S1, opens every locker. 
Then the second student, S2, begins with the second locker, denoted L2, and closes every other locker. 
Student S3 begins with the third locker and changes every third locker (closes it if it was open, and opens it if it was closed).
Student S4 begins with locker L4 and changes every fourth locker. 
Student S5 starts with L5 and changes every fifth locker, and so on, until student S100 changes L100.
*/


public class LockerPuzzle {

	public static void main(String[] args) {
		
		boolean[] isOpen = new boolean[100];
		int studentRoll = 1;
		
		for (int i = 0; i < isOpen.length; i++) {
			isOpen[i] = false;
		}
		
		while (studentRoll != 100) {
			for (int i = 0; i < isOpen.length; i++) {
				if ((i+1) % studentRoll == 0) {
					isOpen[i] = !isOpen[i];
				} else {
					continue;
				}
			}
			studentRoll++;
		}
		
		for (int i = 0; i < isOpen.length; i++) {
			if (isOpen[i] == true) {
				System.out.println("Locker "+ (i + 1) + " is open.");
			}
		}

	}

}
