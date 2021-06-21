import * as yup from "yup";
const schema = yup.object().shape({
    applicationDeadline: yup.date().nullable().required("This field is required"),
    description: yup.string().required("This field is required"),
    jobPositionId: yup.string().required("This field is required"),
    openPositionCount: yup.string().required("This field is required").min(1),
    workplaceId : yup.string().required("This field is required"),
    workingTimeId : yup.string().required("This field is required"),
    cityId: yup.string().required("This field is required"),
    salaryMin: yup.number().required("This field is required"),
    salaryMax: yup.number().required("This field is required")
  });

export default  schema;