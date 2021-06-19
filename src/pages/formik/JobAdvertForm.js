import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import Validations from "./Validations"
import { Button, Dropdown, Input, TextArea, Card, Form, Grid } from "semantic-ui-react";
import CityService from "../../services/cityService";
import JobPositionService from "../../services/jobPositionService";
import styles from "./jobAdvertForm.css"
import JobAdvertService from "../../services/jobAdvertService";

function JobAdvertForm() {

  let jobAdvertService = new JobAdvertService();
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      description: "",
      jobPositionId: "",
      cityId: "",
      salaryMin: "",
      salaryMax: "",
      openPositions: "",
      applicationDeadline: "",
    },
    validationSchema: Validations,
    onSubmit: (values) => {
      values.employerId = 19;
      jobAdvertService.addJobAdvert(values).then((result) => console.log(result.data.data));
      alert("");
      history.push("/jobAdverts");
      
    },
  });
 
  const [cities, setCities] = useState([]);
  const [jobPositions, setJobPositions] = useState([]);

  useEffect(() => {
    let cityService = new CityService();
    let jobPositionService = new JobPositionService();
    cityService.getCities().then((result)=> setCities(result.data.data))
    jobPositionService.getJobPositions().then((result) => setJobPositions(result.data.data));
  }, []);

  const cityOption = cities.map((city, index) => ({
    key: index,
    text: city.cityName,
    value: city.id,
  }));
  const jobPositionOption = jobPositions.map((jobPosition, index) => ({
    key: index,
    text: jobPosition.position,
    value: jobPosition.id,
  }));

  const workingTimeOption =[
    { key:1,text: 'Full Time',value:'Full Time' },
    {key:2,text: 'Part Time', value:'Full Time'}
  ]
  const workplaceOption =[
    {key:1,text: 'Workplace', value:'Workplace' },
    {key:2,text: 'Remote', value:'Remote'}
  ]

  const handleChangeSemantic = (value, fieldName) => {
    formik.setFieldValue(fieldName, value);
  }

  return (
    <div>
      <Card fluid>
      <Card.Content header='Add Job Adverts' />
      <Card.Content>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Field style={{marginBottom: "1rem"}}>
        <Dropdown
          clearable
          item
          placeholder="Job Position"
          search
          selection
          onChange={(event, data) =>
            handleChangeSemantic(data.value, "jobPositionId")
          }
          onBlur={formik.onBlur}
          id="jobPositionId"
          value={formik.values.jobPositionId}
          options={jobPositionOption}
          />
          {formik.errors.jobPositionId && formik.touched.jobPositionId &&(
            <div className={"ui pointing red basic label"}>
            {formik.errors.jobPositionId}
          </div>
          )}
          </Form.Field>
          <Form.Field>
            <Dropdown
              clearable
              item
              placeholder="City"
              search
              selection
              onChange={(event, data) =>
                handleChangeSemantic(data.value, "cityId")
              }
              onBlur={formik.onBlur}
              id="cityId"
              value={formik.values.cityId}
              options={cityOption}
              />
              {formik.errors.cityId && formik.touched.cityId && (
               <div className={"ui pointing red basic label"}>
               {formik.errors.cityId}
               </div>
              )}
           </Form.Field>
           <Form.Field>
             <Dropdown
             placeholder='Select Working Time'
             clearable
             fluid
             selection
             options={workingTimeOption}
            />
           </Form.Field>
           <Form.Field>
             <Dropdown
             clearable
             placeholder='Select Workplace'
             fluid
             selection
             options={workplaceOption}
            />
           </Form.Field>
              <Form.Field>
              <Grid  >
              <Grid.Column width={8}>
                <Input
                  style={{ width: "100%" }}
                  type="number"
                  placeholder="Minimun salary range"
                  value={formik.values.minSalary}
                  name="minSalary"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.minSalary && formik.touched.minSalary && (
                  <div className={"ui pointing red basic label"}>
                  {formik.errors.minSalary}
                </div>
                )}
                </Grid.Column>
                <Grid.Column width={8}>
                <Input
                  style={{ width: "100%" }}
                  name="maxSalary"
                  type="number"
                  placeholder="Maximum salary range"
                  value={formik.values.maxSalary}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
               
                {formik.errors.maxSalary && formik.touched.maxSalary && (
                  <div className={"ui pointing red basic label"}>
                  {formik.errors.maxSalary}
                </div>
                )}
                </Grid.Column>
                </Grid>
              </Form.Field>
              <Form.Field>
              <Grid stackable>
              <Grid.Column width={8}>
                <Input
                  style={{ width: "100%" }}
                  id="openPositions"
                  name="openPositions"
                  error={Boolean(formik.errors.openPositions)}
                  onChange={formik.handleChange}
                  value={formik.values.openPositions}
                  onBlur={formik.handleBlur}
                  type="number"
                  placeholder="Number of open positions"
                />
                {formik.errors.openPositions && formik.touched.openPositions && (
                  <div className={"ui pointing red basic label"}>
                  {formik.errors.openPositions}
                </div>
                )}
                </Grid.Column>
                <Grid.Column width={8}>
                <Input
                  style={{ width: "100%" }}
                  type="date"
                  error={Boolean(formik.errors.lastDate)}
                  onChange={(event, data) =>
                    handleChangeSemantic(data.value, "lastDate")
                  }
                  value={formik.values.lastDate}
                  onBlur={formik.handleBlur}
                  name="applicationDeadline"
                  placeholder="Application Deadline"
                />
                {formik.errors.lastDate && formik.touched.lastDate && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.applicationDeadline}
                  </div>
                )}
                </Grid.Column>
                </Grid>
              </Form.Field>

              <Form.Field>
                <TextArea
                  placeholder="Description"
                  style={{ minHeight: 100 }}
                  error={Boolean(formik.errors.description).toString()}
                  value={formik.values.description}
                  name="description"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.description && formik.touched.description && (
                  <div className={"ui pointing red basic label"}>
                  {formik.errors.description}
                </div>
                )}
              </Form.Field>
              <Button
                content="Ekle"
                labelPosition="right"
                icon="add"
                positive
                type="submit"
                style={{ marginLeft: "20px" }}
              />
      </Form>
      </Card.Content>
      </Card>
    </div>
  )
}
export default JobAdvertForm

