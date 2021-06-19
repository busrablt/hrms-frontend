import * as yup from "yup";
const schema = yup.object().shape({
    lastDate: yup.date().nullable().required("This field is required"),
    description: yup.string().required("This field is required"),
    jobPositionId: yup.string().required("This field is required"),
    openPositions: yup.string().required("This field is required").min(1,"Posizyon sayısı 1 den küçük olamaz"),
    cityId: yup.string().required("This field is required"),
    minSalary: yup.number().min(0,"0 Dan az olamaz").required("This field is required"),
    maxSalary: yup.number().min(0,"0 Dan az olamaz").required("This field is required")
  });

export default  schema;