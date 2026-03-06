import React from "react"
import * as Yup from "yup"
import { useFormik } from "formik"

import * as S from "./styles"

type Props = {
  onContinue: () => void
  onBack: () => void
}

const formatCEP = (value: string) => {
  const numbers = value.replace(/\D/g, "")
  const limited = numbers.slice(0, 8)

  if (limited.length <= 5) return limited
  return `${limited.slice(0, 5)}-${limited.slice(5)}`
}

const DeliveryForm = ({ onContinue, onBack }: Props) => {
  const form = useFormik({
    initialValues: {
      receiver: "",
      address: "",
      city: "",
      zipCode: "",
      number: "",
      complement: ""
    },

    validationSchema: Yup.object({
      receiver: Yup.string()
        .min(3, "Nome muito curto")
        .required("Campo obrigatório"),

      address: Yup.string()
        .min(5, "Endereço muito curto")
        .required("Campo obrigatório"),

      city: Yup.string()
        .min(2, "Cidade inválida")
        .required("Campo obrigatório"),

      zipCode: Yup.string()
        .matches(/^\d{5}-?\d{3}$/, "CEP inválido")
        .required("Campo obrigatório"),

      number: Yup.string()
        .matches(/^\d+$/, "Apenas números")
        .required("Campo obrigatório")
    }),

    onSubmit: () => {
      onContinue()
    }
  })

  const handleCEPChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCEP(e.target.value)
    form.setFieldValue("zipCode", formatted)
  }

  return (
    <form onSubmit={form.handleSubmit}>
      <S.FormContainer>
        <S.Title>Entrega</S.Title>

        <S.Label>Quem irá receber</S.Label>
        <S.Input
          name="receiver"
          value={form.values.receiver}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          hasError={Boolean(form.errors.receiver && form.touched.receiver)}
        />
        {form.touched.receiver && form.errors.receiver && (
          <small className="error">{form.errors.receiver}</small>
        )}

        <S.Label>Endereço</S.Label>
        <S.Input
          name="address"
          value={form.values.address}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          hasError={Boolean(form.errors.address && form.touched.address)}
        />
        {form.touched.address && form.errors.address && (
          <small className="error">{form.errors.address}</small>
        )}

        <S.Label>Cidade</S.Label>
        <S.Input
          name="city"
          value={form.values.city}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          hasError={Boolean(form.errors.city && form.touched.city)}
        />
        {form.touched.city && form.errors.city && (
          <small className="error">{form.errors.city}</small>
        )}

        <S.Row>
          <S.Field>
            <S.Label>CEP</S.Label>
            <S.Input
              name="zipCode"
              value={form.values.zipCode}
              onChange={handleCEPChange}
              onBlur={form.handleBlur}
              hasError={Boolean(form.errors.zipCode && form.touched.zipCode)}
            />
            {form.touched.zipCode && form.errors.zipCode && (
              <small className="error">{form.errors.zipCode}</small>
            )}
          </S.Field>

          <S.Field>
            <S.Label>Número</S.Label>
            <S.Input
              name="number"
              value={form.values.number}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              hasError={Boolean(form.errors.number && form.touched.number)}
            />
            {form.touched.number && form.errors.number && (
              <small className="error">{form.errors.number}</small>
            )}
          </S.Field>
        </S.Row>

        <S.Label>Complemento (opcional)</S.Label>
        <S.Input
          name="complement"
          value={form.values.complement}
          onChange={form.handleChange}
        />
      </S.FormContainer>

      <S.BackButton
        type="submit"
        disabled={!(form.isValid && form.dirty)}
      >
        Continuar com o pagamento
      </S.BackButton>

      <S.BackButton type="button" onClick={onBack}>
        Voltar para o carrinho
      </S.BackButton>
    </form>
  )
}

export default DeliveryForm