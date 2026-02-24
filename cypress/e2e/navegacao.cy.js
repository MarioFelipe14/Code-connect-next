describe('navegando no site', () => {
  it('Deve buscar por um produto, clicar no ícone de gostei, em seguida no ícone de comentar, fazer um comentário, clicar e em seguida clicar no ícone do site e voltar para a página inicial', () => {
    cy.visit('https://code-connect-next-gules.vercel.app/');
    cy.get('.searchform_input__AzlyJ').type('Introdução ao React');
    cy.get('.searchform_form__3UtQz > .button_btn__8WMhP').click();
    cy.get('.cardpost_link__3HDEA').click();
    cy.get(':nth-child(1) > .iconbutton_btn__FU334').click();
    cy.get(':nth-child(2) > .iconbutton_btn__FU334').click();
    cy.get('.modal_dialog__qQ1df').type('Teste de comentário');
    cy.get('.commentmodal_footer__2OUZu > .button_btn__8WMhP').click();
    cy.get('a > img').click();

  })
})