import React from 'react';
import { useForm, useFieldArray, Controller } from "react-hook-form";

import {
  Box,
  Button,
	Header,
	DatePicker,
  FieldLabel,
  NumberInput
} from '@lightspeed/design-system-react';

export const Form = () => {
	const { control, handleSubmit } = useForm({
		defaultValues: {
      discounts: [{ date: new Date(), reduction: 0 }]
    }
	});
	const { fields, append, remove } = useFieldArray({
    control,
    name: "discounts"
  });
	const onSubmit = (formData, event) => {
    event?.preventDefault();
    console.log(formData)
  };
	return(
		<Box>
			<Box pb={5}>
				<Header level="1" type="heading">
					Expiration discounts
				</Header>
			</Box>
			<form id="discountForm" action="" method="post" onSubmit={handleSubmit(onSubmit)}>
				{fields.map(({ id }, index) => {
					return (
						<div key={id}>
							<Box py={4} className="vd-flex vd-flex--justify-between vd-flex--align-end">
							<FieldLabel label="Date:">
								<Controller
									name={`discounts[${index}].date`}
									control={control}
									render={({ field }) => (
										<DatePicker
											date={field.value}
											defaultValue={new Date()}
											{...field}
										/>
									)}
								/>
							</FieldLabel>
							<FieldLabel label="Reduction">
							<Controller
            		name={`discounts[${index}].reduction`}
            		control={control}
            		render={({ field }) => (
									<NumberInput
										autoFocus
										errorMessages={{
											max: 'Amount cannot exceed 100',
											min: 'Amount cannot be below 0',
											nonDecimal: 'Amount can’t contain a decimal point',
											nonEmpty: 'Enter amount',
											nonNegative: 'Amount can’t be negative',
											nonZero: 'Amount must be greater than 0'
										}}
										validators={{
											max: true,
											min: true,
											nonDecimal: true,
											nonEmpty: true,
											nonNegative: true,
										}}
										min={0}
										max={100}
										{...field}
									/>
								)}
							/>
							</FieldLabel>

							<Button type="button" onClick={() => remove(index)}>Remove</Button>
							</Box>
						</div>
					);
				})}
				<Button type="button" onClick={() => append({ date: new Date(), reduction: 0 })}>Add another discount</Button>
			</form>
			<Box className="vd-flex vd-flex--justify-between vd-flex--align-center" py={8}>
				<Button type="submit" form="discountForm" variant="do">
					Submit
				</Button>
			</Box>
		</Box>
	)
};
