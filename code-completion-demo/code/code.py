class Student:
    def __init__(self, student_id, name):
        self.student_id = student_id
        self.name = name
        self.grades = {}  # Dictionary to store subject: grade pairs

    def add_grade(self, subject, grade):
        """
        Add a grade for a specific subject.
        
        Parameters:
        subject (str): The subject name.
        grade (float): The grade received.
        """
        self.grades[subject] = grade

    def calculate_wam(self):
        """
        Calculate the Weighted Average Mark (WAM) for the student.
        
        Returns:
        float: The calculated WAM.
        """
        # TODO: Implement the WAM calculation
        pass

def generate_student_report(student):
    """
    Generate a report for the student, including their name, subjects, grades, and WAM.
    
    Parameters:
    student (Student): The student object.
    
    Returns:
    str: The formatted student report.
    """
    # TODO: Implement student report generator.
    pass