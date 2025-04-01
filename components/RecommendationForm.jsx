import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { useRecommendations } from '../context/RecommendationContext';

const RecommendationForm = () => {
  const { addRecommendation } = useRecommendations();
  const [submitted, setSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      recommendation: '',
    },
    validationSchema: Yup.object({
      recommendation: Yup.string()
        .required('Recommendation is required')
        .min(50, 'Recommendation must be at least 50 characters'),
    }),
    onSubmit: (values) => {
      addRecommendation(values.recommendation);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      formik.resetForm();
    },
  });

  const isFormFieldInvalid = (name) =>
    !!(formik.touched[name] && formik.errors[name]);

  const getFormErrorMessage = (name) =>
    isFormFieldInvalid(name) ? formik.errors[name] : null;

  return (
    <div className="bg-white border rounded p-6 space-y-4">
      <h3 className="text-lg font-semibold mb-4">Write a Recommendation</h3>
      <form autoComplete="off" onSubmit={formik.handleSubmit} className="">
        <textarea
          className="w-full h-32 p-2 border border-gray-300 rounded mb-4"
          name="recommendation"
          placeholder="Write your recommendation here..."
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.recommendation}
        ></textarea>
        {getFormErrorMessage('recommendation') && (
          <small className="p-error">
            {getFormErrorMessage('recommendation')}
          </small>
        )}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
            disabled={formik.isSubmitting || !formik.isValid}
          >
            Submit Recommendation
          </button>
        </div>
        {submitted && (
          <div className="text-green-600 text-sm mt-2">
            Recommendation submitted successfully!
          </div>
        )}
      </form>
    </div>
  );
};

export default RecommendationForm;
