import * as ts from 'typescript'

export const DEFAULT_EXTENSION_REGEX = /\.(gql|graphql)$/

function getVisitor(ctx: ts.TransformationContext, _sf: ts.SourceFile) {
  console.log('xxxxxxxxxxxxx')

  const visitor: ts.Visitor = (node: ts.Node) => {
    return ts.visitEachChild(node, visitor, ctx)
  }
  return visitor
}

export function factory(): ts.TransformerFactory<ts.Node> {
  return ctx => (sf: ts.SourceFile) => ts.visitNode(sf, getVisitor(ctx, sf))
}
