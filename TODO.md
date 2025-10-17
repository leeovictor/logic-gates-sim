[x] configurar canvas

[x] line tool
  * adicionar uma linha no canvas quando a ferramenta está ativa
[] simple selection tool
  * implementar ToolManager
  * implementar seleção de formas
  * consigo selecionar formas no canvas com click
    * translação da forma (move)
    * deleção (`Del`)
[] text tool
  * inserir texto simples no canvas
[] box tool
  * inserir boxes de diferente tamanhos no canvas
[] salvar conteúdo do canvas (localstorage? export?)
[] Undo e Redo Feature
  * permitir o usuário desfazer ou refazer a última modificação (Ctrl+Z, Ctrl+Y)

## Line tool
Adiciona linhas no quadro
  * clico primeiro vez e começo a desenhar a linha, mostrando o preview da linha quando o mouse é movimentado
  * clico segunda vez e a linha é criada usando os pontos de click do mouse

### Opcional
Encadeamento de linha: o usuário consegue desenha um poligono e conectar as linhas a medida que faz os cliques (considerar isso como uma tool separada?)

## Selection tool
Seleção simples de formas: o usuário clica na forma e ela é selecionada. Depois de selecionada algumas ações ficam disponíveis: excluir forma, mover forma etc

## Deleção de formas
Exclusão de formas selecionadas com tecla `Del` 
