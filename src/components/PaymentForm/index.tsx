import { useFormik } from "formik"
import * as Yup from "yup"
import { useRef } from "react"
import { useDispatch } from "react-redux"
import { clear } from "../../store/reducers/cart"

import type { Produto } from "../ProductCards"
import * as S from "../DeliveryForm/styles"

type Props = {
  items: Produto[]
  total: number
  onBack: () => void
  onSuccess: (orderId: string) => void
}

const formatCardNumber = (value: string) => {
  const numbers = value.replace(/\D/g, "").slice(0, 16)
  return numbers.replace(/(\d{4})(?=\d)/g, "$1 ")
}

const formatCVV = (value: string) => {
  return value.replace(/\D/g, "").slice(0, 3)
}

const formatMonth = (value: string) => {
  return value.replace(/\D/g, "").slice(0, 2)
}

const formatYear = (value: string) => {
  return value.replace(/\D/g, "").slice(0, 4)
}

const PaymentForm = ({ items, total, onBack, onSuccess }: Props) => {
  const dispatch = useDispatch()

  const cvvRef = useRef<HTMLInputElement>(null)
  const monthRef = useRef<HTMLInputElement>(null)
  const yearRef = useRef<HTMLInputElement>(null)

  const form = useFormik({
    initialValues: {
      cardName: "",
      cardNumber: "",
      code: "",
      month: "",
      year: ""
    },

    validationSchema: Yup.object({
      cardName: Yup.string()
        .min(3, "Nome inválido")
        .required("Campo obrigatório"),

      cardNumber: Yup.string()
        .matches(/^\d{4} \d{4} \d{4} \d{4}$/, "Cartão inválido")
        .required("Campo obrigatório"),

      code: Yup.string()
        .matches(/^\d{3}$/, "CVV inválido")
        .required("Campo obrigatório"),

      month: Yup.string()
        .matches(/^(0[1-9]|1[0-2])$/, "Mês inválido")
        .required("Campo obrigatório"),

      year: Yup.string()
        .matches(/^\d{4}$/, "Ano inválido")
        .required("Campo obrigatório")
    }),

    onSubmit: async (values) => {
      const response = await fetch(
        "https://api-ebac.vercel.app/api/efood/checkout",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            products: items.map((item) => ({
              id: item.id,
              price: item.preco
            })),
            payment: {
              card: {
                name: values.cardName,
                number: values.cardNumber,
                code: Number(values.code),
                expires: {
                  month: Number(values.month),
                  year: Number(values.year)
                }
              },
              total: total
            }
          })
        }
      )

      const data = await response.json()

      dispatch(clear())

      onSuccess(data.orderId)
    }
  })

  return (
    <form onSubmit={form.handleSubmit}>
      <S.FormContainer>

        <S.Title>Pagamento - valor total: R$ {total.toFixed(2)}</S.Title>

        <S.Label>Nome no cartão</S.Label>
        <S.Input
          name="cardName"
          value={form.values.cardName}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
        />

        <S.Row>

          <S.Field flex={2}>
            <S.Label>Número do cartão</S.Label>
            <S.Input
              name="cardNumber"
              value={form.values.cardNumber}
              onChange={(e) => {
                const value = formatCardNumber(e.target.value)
                form.setFieldValue("cardNumber", value)

                if (value.replace(/\s/g, "").length === 16) {
                  cvvRef.current?.focus()
                }
              }}
            />
          </S.Field>

          <S.Field flex={1}>
            <S.Label>CVV</S.Label>
            <S.Input
              ref={cvvRef}
              name="code"
              value={form.values.code}
              onChange={(e) => {
                const value = formatCVV(e.target.value)
                form.setFieldValue("code", value)

                if (value.length === 3) {
                  monthRef.current?.focus()
                }
              }}
            />
          </S.Field>

        </S.Row>

        <S.Row>

          <S.Field>
            <S.Label>Mês</S.Label>
            <S.Input
              ref={monthRef}
              name="month"
              value={form.values.month}
              onChange={(e) => {
                const value = formatMonth(e.target.value)
                form.setFieldValue("month", value)

                if (value.length === 2) {
                  yearRef.current?.focus()
                }
              }}
            />
          </S.Field>

          <S.Field>
            <S.Label>Ano</S.Label>
            <S.Input
              ref={yearRef}
              name="year"
              value={form.values.year}
              onChange={(e) => {
                form.setFieldValue("year", formatYear(e.target.value))
              }}
            />
          </S.Field>

        </S.Row>

      </S.FormContainer>

      <S.BackButton
        type="submit"
        disabled={!(form.isValid && form.dirty)}
      >
        Finalizar pagamento
      </S.BackButton>

      <S.BackButton type="button" onClick={onBack}>
        Voltar para edição de endereço
      </S.BackButton>

    </form>
  )
}

export default PaymentForm