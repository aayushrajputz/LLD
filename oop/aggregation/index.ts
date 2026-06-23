class professor {
    name: string
    constructor(name: string) {
        this.name = name
    }
}

class department {
    deptName: string
    professors: professor[] = []
    constructor(deptName: string) {
        this.deptName = deptName
    }
    addProfessor(professor: professor): void {
        this.professors.push(professor)
    }
    showProfessor(): void {
        console.log("professors of " + this.deptName + ":");
        this.professors.forEach(professor => {
            console.log("- " + professor.name);

        })

    }
}

const professor1 = new professor("Om")


const department1 = new department("Computer Science")


department1.addProfessor(professor1)


department1.showProfessor()
