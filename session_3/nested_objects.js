const userDetails = {
  name: {
    first: "Vivek",
    last: "Nigam",
  },
  jobTitle: "JS Instructor @ Crio.do",
  email: {
    work: "vivek@resuminator.in",
		personal: "",
  },
  status: {
    isOnline: true,
    isVerified: false,
  }
}
userDetails.name.first="Deepak";
userDetails.name.last="K";
userDetails.jobTitle= "SDE @xyz";
delete userDetails.email.work;
userDetails.email.personal= 'deepak@g.com';
userDetails.status.isProMember= false;

console.table(userDetails)