import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import Validations from "./Validations"
import { Button, Dropdown, Input, TextArea, Card, Form, Grid } from "semantic-ui-react";
import CityService from "../../services/cityService";
import JobPositionService from "../../services/jobPositionService";
import JobAdvertService from "../../services/jobAdvertService";
import WorkingTimeService from "../../services/workingTimeService";
import WorkplaceService from "../../services/workplaceService";

function JobAdvertForm() {

  let jobAdvertService = new JobAdvertService();

  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      description: "",
      jobPositionId: "",
      cityId: "",
      workplaceId:"",
      workingTimeId:"",
      salaryMin: "",
      salaryMax: "",
      openPositionCount: "",
      applicationDeadline: "",
    },
    validationSchema: Validations,
    onSubmit: (values) => {
      values.employerId = 19;
      jobAdvertService.addJobAdvert(values).then((result) => {
        alert("eklendi");
        history.push("/jobAdverts");
        
      }).catch((err) => console.log(values));
    },
  });
 
  const [cities, setCities] = useState([]);
  const [jobPositions, setJobPositions] = useState([]);
  const [workingTimes, setWorkingTime] = useState([]);
  const [workplaces, setWorkplace] = useState([]);

  useEffect(() => {
    let cityService = new CityService();
    cityService.getCities().then((result)=> setCities(result.data.data))

    let jobPositionService = new JobPositionService();
    jobPositionService.getJobPositions().then((result) => setJobPositions(result.data.data));

    let workingTimeService = new WorkingTimeService();
    workingTimeService.getWorkingTimes().then((result)=> setWorkingTime(result.data.data)) ;

    let workplaceService = new WorkplaceService();
    workplaceService.getWorkPlaces().then((result) => setWorkplace(result.data.data));
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

  const workingTimeOption = workingTimes.map((workingTime, index) =>({
    key: index,
    text: workingTime.workingTime,
    value: workingTime.id,
  }))

  const workplaceOption = workplaces.map((workplace, index) => ({
    key: index,
    text: workplace.workplace,
    value: workplace.id,
  }))


  return (
    <div>
      <Card fluid>
      <Card.Content header='Add Job Adverts' />
      <Card.Content>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Field style={{marginBottom: "1rem"}}>
        <Dropdown
          id="jobPositionId"
          clearable
          placeholder="Job Position"
          search
          selection
          onChange={(fieldName, data) =>
            formik.setFieldValue("jobPositionId", data.value)
          }
          onBlur={formik.onBlur}
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
              id="cityId"
              clearable
              placeholder="City"
              search
              selection
              onChange={(fieldName, data) =>
                formik.setFieldValue("cityId", data.value)
              }
              onBlur={formik.onBlur}
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
             id="workingTimeId"
             clearable
             placeholder="Select Working Time"
             search
             selection
             onChange={(fieldName, data) =>
              formik.setFieldValue("workingTimeId", data.value)
            }
             onBlur={formik.onBlur}
              value={formik.values.workingTimeId}
              options={workingTimeOption}
              />
              {formik.errors.workingTimeId && formik.touched.workingTimeId && (
               <div className={"ui pointing red basic label"}>
               {formik.errors.workingTimeId}
               </div>
              )}
           </Form.Field>
           <Form.Field>
           <Dropdown
             id="workplaceId"
             clearable
             placeholder="Select Workplace"
             search
             selection
             onChange={(fieldName, data) =>
              formik.setFieldValue("workplaceId", data.value)
            }
             onBlur={formik.onBlur}
              value={formik.values.workplaceId}
              options={workplaceOption}
              />
              {formik.errors.workplaceId && formik.touched.workplaceId && (
               <div className={"ui pointing red basic label"}>
               {formik.errors.workplaceId}
               </div>
              )}
           </Form.Field>
              <Form.Field>
              <Grid  >
              <Grid.Column width={8}>
                <Input
                style={{ width: "100%" }}
                type="number"
                name="salaryMin"
                placeholder="Minimun salary range"
                onChange={formik.handleChange}
                value={formik.values.salaryMin}
                onBlur={formik.handleBlur}
              >
              </Input>
              {formik.errors.salaryMax && formik.touched.salaryMax && (
                <div className={"ui pointing red basic label"}>
                  {formik.errors.salaryMax}
                </div>
                )}
                </Grid.Column>
                <Grid.Column width={8}>
                <Input
                style={{ width: "100%" }}
                name="salaryMax"
                type="number"
                placeholder="Maximum salary range"
                onChange={formik.handleChange}
                value={formik.values.salaryMax}
                onBlur={formik.handleBlur}
              >
              </Input>
              {formik.errors.salaryMax && formik.touched.salaryMax && (
                  <div className={"ui pointing red basic label"}>
                  {formik.errors.salaryMax}
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
                name="openPositionCount"
                type="number"
                placeholder="Number of open positions"
                onChange={formik.handleChange}
                value={formik.values.openPositionCount}
                onBlur={formik.handleBlur}
              >
              </Input>
              {formik.errors.openPositionCount && formik.touched.openPositionCount && (
                  <div className={"ui pointing red basic label"}>
                  {formik.errors.openPositionCount}
                </div>
                )}
                </Grid.Column>
                <Grid.Column width={8}>
                <Input
                  style={{ width: "100%" }}
                  name="applicationDeadline"
                  type="date"
                  placeholder="Application Deadline"
                  onChange={formik.handleChange}
                  value={formik.values.applicationDeadline}
                  onBlur={formik.handleBlur}      
                />
                {formik.errors.applicationDeadline && formik.touched.applicationDeadline && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.applicationDeadline}
                  </div>
                )}
                </Grid.Column>
                </Grid>
              </Form.Field>

              <Form.Field>
                <TextArea
                  style={{ minHeight: 100 }}
                  name="description"
                  placeholder="Description"
                  onChange={formik.handleChange}
                  value={formik.values.description}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.description && formik.touched.description && (
                  <div className={"ui pointing red basic label"}>
                  {formik.errors.description}
                </div>
                )}
              </Form.Field>
              <Button
                content="Add"
                labelPosition="right"
                icon="add"
                positive
                type="submit"
                style={{ backgroundColor:"purple"}}
                
              />

              <Button
							content="Clean"
							type="reset"
              labelPosition="right"
              icon="delete"
							onClick={formik.handleReset}
              style={{ marginLeft: "600px" }}
							disabled={!formik.dirty || formik.isSubmitting}
              
						  />
      </Form>
      </Card.Content>
      </Card>
    </div>
  )
}
export default JobAdvertForm

