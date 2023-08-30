const jobs = []

function showJobs() {
  const jobsInText = jobs.reduce((finalText, job, index) => {
    finalText += index + ". "
    finalText += job.title
    finalText += " (" + job.applicants.length + " applicants)\n"
    return finalText
  }, "")

  alert(jobsInText)
}

function newJob() {
  const title = prompt("What is the name of this job vacancy?")
  const description = prompt("Provide a description for this opportunity:")
  const deadline = prompt("What is the deadline (dd/mm/aaaa) to apply for this position?")

  const confirmation = confirm(
    "Do you want to create a job vacancy with this informations?\n" +
    "Title: " + title + "\nDescription: " + description + "\nDeadline: " + deadline
  )

  if (confirmation) {
    const newJob = { title: title, description: description, deadline: deadline, applicants: [] }
    jobs.push(newJob)
    alert("Job vacancy created.")
  }
}

function detailJob() {
  const index = prompt("What is the index number of the job opportunity you want more information of?")
  const job = jobs[index]

  const applicantsInText = job.applicants.reduce((finalText, applicant) => finalText + "\n - " + applicant, "")

  alert(
    "Job vacancy #" + index +
    "\nTitle: " + job.title +
    "\nDescription: " + job.description +
    "\nDeadline: " + job.deadline +
    "\nNumber of applicants: " + job.applicants.length +
    "\nApplicants:" + applicantsInText
  )
}

function apply() {
  const applicant = prompt("What is the name of the applicant?")
  const index = prompt("What is the index number of the job vacancy you want to apply?")
  const job = jobs[index]

  const confirmation = confirm(
    "Do you want to apply  " + applicant + " for the position #" + index + "?\n" +
    "Title: " + job.title + "\nDescription: " + job.description + "\nDeadline: " + job.deadline
  )

  if (confirmation) {
    job.applicants.push(applicant)
    alert("Application completed")
  }
}

function deleteJob() {
  const index = prompt("What is the index number of the application you want to delete?")
  const job = jobs[index]

  const confirmation = confirm(
    "Are you sure you want to delete the job vacancy #" + index + "?\n" +
    "Title: " + job.title + "\nDescription: " + job.description + "\nDeadline: " + job.deadline
  )

  if (confirmation) {
    jobs.splice(index, 1)
    alert("Job vacancy deleted.")
  }
}

function menu() {
  const option = prompt(
    "Job vacancy system" +
    "\n\nChoose from one of the options below" +
    "\n1. Show job vacancies" +
    "\n2. Create a new job vacancy" +
    "\n3. Show details of a job vacancy" +
    "\n4. Apply a candidate" +
    "\n5. Delete job vacancy" +
    "\n6. Exit"
  )

  return option
}

function run() {
  let option = ""

  do {
    option = menu()

    switch (option) {
      case "1":
        showJobs()
        break
      case "2":
        newJob()
        break
      case "3":
        detailJob()
        break
      case "4":
        apply()
        break
      case "5":
        deleteJob()
        break
      case "6":
        alert("Exiting...")
        break
      default:
        alert("Invalid option.")
    }

  } while (option !== "6");
}

run()